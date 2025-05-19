// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="pt-br">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.png" />
          <title> Antônio Alberto do Vale Cerqueira Advocacia</title>
          <meta
            name="description"
            content="Alberto do Vale Cerqueira Advocacia: Advocacia em Brasília com foco em Direito de Alta Complexidade, incluindo Tribunais Superiores, Direito Criminal, Administrativo Sancionatório, Imobiliário, Empresarial, Família e Sucessões. Nosso diferencial é o atendimento humanizado e estratégico para cada cliente."
          />
          <GoogleFontsLinks />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));

function GoogleFontsLinks() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin={"anonymous"}
      />

      {/* Montserrat light */}
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:wght@300&display=swap"
        rel="stylesheet"
      ></link>

      {/* Montserrat regular */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
        rel="stylesheet"
      ></link>

      {/* Montserrat medium */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap"
        rel="stylesheet"
      ></link>

      {/* Montserrat bold */}
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap"
        rel="stylesheet"
      ></link>
    </>
  );
}
