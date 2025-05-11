import type { APIEvent } from "@solidjs/start/server";

export async function POST({ request }: APIEvent) {
  const formValue = await request.json();
  console.info("POST /contact: ", JSON.stringify(formValue));
  try {
    // https://developer.microsoft.com/en-us/graph/graph-explorer
    const response = await fetch("https://graph.microsoft.com/v1.0/me/sendMail", {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${process.env.OUTLOOK_TOKEN}`,
      },
      method: "POST",
      body: JSON.stringify({
        message: {
          subject: "Novo Contato do Site",
          body: {
            contentType: "Text",
            content: `Nome: ${formValue.name}\nTelefone:${formValue.phone}\nE-mail: ${formValue.email}\n`,
          },
          toRecipients: [
            {
              emailAddress: {
                address: "contato@antonioalbert",
              },
            },
          ],
        },
      }),
    });
    if (!response.ok) {
      console.error(`Error sending email (${JSON.stringify(formValue)}):`, await response.text());
      return new Response("Internal Server Error", {
        status: 500,
      });
    }
    return new Response("ok", {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error(`Error sending email (${JSON.stringify(formValue)}):`, error);
    return new Response("Internal Server Error", {
      status: 500,
    });
  }
}
