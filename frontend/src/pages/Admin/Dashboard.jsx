import {
  Users,
  IndianRupee,
  FileText,
  AlertCircle,
  ScanLine,
  Mail,
  Bell,
} from "lucide-react";
import BillScanner from "../../components/admin/BillScanner";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", amount: 1800 },
  { month: "Feb", amount: 2200 },
  { month: "Mar", amount: 2600 },
  { month: "Apr", amount: 2100 },
  { month: "May", amount: 2295 },
  { month: "May", amount: 2095 },
  { month: "May", amount: 2185 },
];

export default function AdminDashboard() {
    async function sendEmail(){

  try {

    const response = await fetch(
      "http://localhost:5000/send-bill-email",
      {
        method: "POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify({

          email:"struct.nika@gmail.com",

          name:"Shri. Ashwin P. Mansuria",

          amount:2295,

          month:"May-26"

        })
      }
    );


    const data = await response.json();

    console.log(data);

    alert("Bill email sent successfully!");

  }
  catch(error){

    console.error(error);

    alert("Email failed");

  }

}

function createNotice(){
  alert("Notice creation module opened");
}


function sendNotification(){
  alert("Email notification sent to residents");
}


function manageResidents(){
  alert("Resident management opened");
}
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-10">

      {/* Header */}
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-center">

        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Admin Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your society operations from one place.
          </p>
        </div>

        {/* <Button className="bg-emerald-600 hover:bg-emerald-700">
          <ScanLine className="mr-2 h-5 w-5" />
          Scan Bill with AI
        </Button> */}

      </div>


      {/* Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Residents</CardTitle>
            <Users className="text-emerald-600" />
          </CardHeader>

          <CardContent>
            <h2 className="text-3xl font-bold">
              240
            </h2>
            <p className="text-gray-500">
              Registered members
            </p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Collection</CardTitle>
            <IndianRupee className="text-emerald-600" />
          </CardHeader>

          <CardContent>
            <h2 className="text-3xl font-bold">
              ₹3.2L
            </h2>
            <p className="text-gray-500">
              This month
            </p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Pending Bills</CardTitle>
            <FileText className="text-orange-500" />
          </CardHeader>

          <CardContent>
            <h2 className="text-3xl font-bold">
              18
            </h2>
            <p className="text-gray-500">
              Awaiting payment
            </p>
          </CardContent>
        </Card>


        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Complaints</CardTitle>
            <AlertCircle className="text-red-500" />
          </CardHeader>

          <CardContent>
            <h2 className="text-3xl font-bold">
              12
            </h2>
            <p className="text-gray-500">
              Need attention
            </p>
          </CardContent>
        </Card>

      </div>


      {/* Main Sections */}
      <div className="mt-10 grid gap-6 lg:grid-cols-2">


        {/* AI Scanner */}
        <BillScanner />
        
        
   



        {/* Notice Management */}
        <Card>

          <CardHeader>
            <CardTitle>
              Quick Actions
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">

            <Button
  variant="outline"
  className="w-full justify-start"
  onClick={createNotice}
>
  <Bell className="mr-3" />
  Create Notice
</Button>


            <Button
  variant="outline"
  className="w-full justify-start"
  onClick={sendNotification}
>
  <Mail className="mr-3" />
  Send Email Notification
</Button>


            <Button
  variant="outline"
  className="w-full justify-start"
  onClick={manageResidents}
>
  <Users className="mr-3" />
  Manage Residents
</Button>

          </CardContent>

        </Card>

        <Button
  onClick={sendEmail}
  className="bg-emerald-600 hover:bg-emerald-700"
>
  📧 Notify Resident with Email
</Button>

     


      </div>

<div className="bg-white rounded-2xl p-6 shadow">
  <h2 className="mb-4 text-xl font-bold">
    Monthly Collection
  </h2>

  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="amount" fill="#10b981" />
    </BarChart>
  </ResponsiveContainer>
</div>
    </div>

    
  );
}