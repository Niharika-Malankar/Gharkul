import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";


import {
  ReceiptIndianRupee,
  Bell,
  MessageSquare,
  User,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";

import { Button } from "../../components/ui/button";

export default function ResidentDashboard() {

    const [bill, setBill] = useState(null);
    const [items, setItems] = useState([]);

    useEffect(() => {

  async function fetchBill(){

    const { data: flat } = await supabase
  .from("flats")
  .select("*")
  .eq("flat_number", "B/301")
  .single();


    if(!flat) return;


    const { data: billData } = await supabase
  .from("maintenance_bills")
.select(`
  *,
  flats(
    flat_number,
    wing,
    floor,
    owner_name
  )
`)
      .eq("flat_id", flat.id)
      .order("created_at", {
        ascending:false
      })
      .limit(1)
      .single();


    setBill(billData);



    if(billData){

      const { data:itemData } = await supabase
        .from("bill_items")
        .select("*")
        .eq("bill_id", billData.id);


      setItems(itemData || []);

    }


  }


  fetchBill();


},[]);

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">

      {/* Header */}

      <div className="mb-10">

        <h1 className="text-4xl font-bold text-gray-900">
          Resident Dashboard
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your society activities easily.
        </p>

      </div>


      {/* Cards */}

      <div className="grid gap-6 md:grid-cols-3">


        <Card>

          <CardHeader className="flex flex-row items-center justify-between">

            <CardTitle>
              Maintenance
            </CardTitle>

            <ReceiptIndianRupee className="text-emerald-600"/>

          </CardHeader>


          <CardContent>

            <h2 className="text-3xl font-bold">
  ₹{bill?.grand_total || 0}
</h2>

<p className="text-gray-500">
  {bill?.bill_month || "No bill"}
</p>


            <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700">
              Pay Now
            </Button>

          </CardContent>

        </Card>



        <Card>

          <CardHeader className="flex flex-row items-center justify-between">

            <CardTitle>
              Notices
            </CardTitle>

            <Bell className="text-orange-500"/>

          </CardHeader>


          <CardContent>

            <h2 className="text-3xl font-bold">
              5
            </h2>

            <p className="text-gray-500">
              New announcements
            </p>

          </CardContent>

        </Card>




        <Card>

          <CardHeader className="flex flex-row items-center justify-between">

            <CardTitle>
              Complaints
            </CardTitle>

            <MessageSquare className="text-red-500"/>

          </CardHeader>


          <CardContent>

            <h2 className="text-3xl font-bold">
              2
            </h2>

            <p className="text-gray-500">
              Active requests
            </p>

          </CardContent>

        </Card>


      </div>



      {/* Profile + Actions */}

      <div className="mt-10 grid gap-6 lg:grid-cols-2">


        <Card>

          <CardHeader>

            <CardTitle>
              My Profile
            </CardTitle>

          </CardHeader>


          <CardContent className="space-y-3">

            <div className="flex items-center gap-3">

              <User className="text-emerald-600"/>

              <span>
                Resident Account
              </span>

            </div>


           <p>
  Apartment: {bill?.flats?.flat_number || "Loading..."}
</p>


          </CardContent>


        </Card>



        <Card>

          <CardHeader>

            <CardTitle>
              Quick Actions
            </CardTitle>

          </CardHeader>


          <CardContent className="space-y-4">


            <Button
              variant="outline"
              className="w-full"
            >
              View Bills
            </Button>


            <Button
              variant="outline"
              className="w-full"
            >
              View Notices
            </Button>


            <Button
              variant="outline"
              className="w-full"
            >
              Raise Complaint
            </Button>


          </CardContent>


        </Card>

        <Card className="mt-8">

<CardHeader>
<CardTitle>
Latest Bill Details
</CardTitle>
</CardHeader>


<CardContent>

{
items.map((item)=>(
<div
key={item.id}
className="flex justify-between border-b py-2"
>

<span>
{item.category}
</span>

<span className="font-semibold">
₹{item.amount}
</span>

</div>
))
}

</CardContent>

</Card>


      </div>


    </div>
  );
}