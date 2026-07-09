import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});


export async function scanBill(imageUrl) {

  const result = await groq.chat.completions.create({

    model: "meta-llama/llama-4-scout-17b-16e-instruct",

    messages: [
      {
        role: "user",
        content: [
          {
            type: "text",
            text: `
Analyze this society maintenance bill image.

Return ONLY JSON:

{
 "resident_name":"",
 "flat_number":"",
 "bill_number":"",
 "bill_month":"",
 "bill_date":"",
 "due_date":"",
 "items":[
   {
    "category":"",
    "amount":0
   }
 ],
 "grand_total":0
}
`
          },

          {
            type: "image_url",
            image_url:{
              url:imageUrl
            }
          }
        ]
      }
    ],

    temperature:0

  });


  const text =
    result.choices[0].message.content;


  const cleanedText = text
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

return JSON.parse(cleanedText);

}