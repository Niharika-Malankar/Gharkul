import { useState } from "react";
import { Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import { scanBill } from "../../services/groq";

import { supabase } from "../../lib/supabase";
export default function BillScanner() {

  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function saveBill(data) {

  // get demo flat
  const { data: flat, error: flatError } = await supabase
  .from("flats")
  .select("id")
  .eq("flat_number", data.flat_number)
  .single();


if(flatError) throw flatError;

if(!flat){
  throw new Error("Flat not found");
}


  // create bill

  const { data: bill, error: billError } = await supabase
    .from("maintenance_bills")
    .insert([
      {
        bill_number: data.bill_number,
        flat_id: flat.id,
        bill_month: data.bill_month,
        bill_date: data.bill_date || new Date(),
        due_date: data.due_date || null,
        subtotal: data.grand_total,
        grand_total: data.grand_total,
        ai_scanned: true
      }
    ])
    .select()
    .single();


  if(billError) throw billError;



  // create items

  const items = data.items.map((item)=>({

    bill_id: bill.id,

    category: item.category,

    amount: item.amount

  }));


  const {error:itemError}=await supabase
    .from("bill_items")
    .insert(items);


  if(itemError) throw itemError;


  return bill;

}

  async function handleScan() {

    if (!image) {
      toast.error("Please select a bill image");
      return;
    }


    setLoading(true);


    try {

      // Temporary image URL for testing
      const fileName = `${Date.now()}-${image.name}`;


const { error: uploadError } = await supabase.storage
  .from("bill-images")
  .upload(fileName, image);


if (uploadError) {
  throw uploadError;
}


const { data: urlData } = supabase.storage
  .from("bill-images")
  .getPublicUrl(fileName);


const imageUrl = urlData.publicUrl;


const data = await scanBill(imageUrl);


await saveBill(data);


setResult(data);

      toast.success("Bill scanned successfully");


    } catch(error){

      console.log(error);

      toast.error("AI scanning failed");

    }


    setLoading(false);

  }



  return (

    <Card>

      <CardHeader>
        <CardTitle>
          🤖 AI Maintenance Bill Scanner
        </CardTitle>
      </CardHeader>


      <CardContent>


        <div className="rounded-xl border-2 border-dashed p-8 text-center">


          <Upload className="mx-auto h-12 w-12 text-emerald-600"/>


          <input
            type="file"
            accept="image/*"
            className="mt-5"
            onChange={(e)=>setImage(e.target.files[0])}
          />


          <Button
            className="mt-5 bg-emerald-600 hover:bg-emerald-700"
            onClick={handleScan}
            disabled={loading}
          >

            {
              loading ? (
                <>
                  <Loader2 className="mr-2 animate-spin"/>
                  Scanning...
                </>
              )
              :
              "Scan Bill"
            }

          </Button>


        </div>



        {
          result && (

            <div className="mt-6 rounded-xl bg-gray-50 p-5">

              <h3 className="font-bold text-lg">
                Extracted Details
              </h3>

              <p>
  Resident:
  <b>{result.resident_name}</b>
</p>

<p>
  Flat:
  <b>{result.flat_number}</b>
</p>


              <p>
                Bill Number:
                <b> {result.bill_number}</b>
              </p>


              <p>
                Month:
                <b> {result.bill_month}</b>
              </p>


              <p>
                Total:
                <b> ₹{result.grand_total}</b>
              </p>


              <h4 className="mt-4 font-semibold">
                Items
              </h4>


              {
                result.items?.map((item,index)=>(
                  <div key={index}
                    className="flex justify-between"
                  >
                    <span>
                      {item.category}
                    </span>

                    <span>
                      ₹{item.amount}
                    </span>

                  </div>
                ))
              }


            </div>

          )
        }


      </CardContent>

    </Card>

  );
}