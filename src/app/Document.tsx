import styles from "./styles.css?url";

export const Document: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <html lang="en">
    <head>
      <link rel="stylesheet" href={styles} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Suggest Add-On</title>
      <link rel="modulepreload" href="/src/client.tsx" />
      <link rel="icon" href="/favicon.png" type="image/png" />

      {/* including this within the head to prevent FOUC */}
      <script type="text/javascript">
        document.documentElement.classList.toggle( "dark", localStorage.theme
        === "dark" || (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) );
      </script>
    </head>
    <body>
      <div id="root">{children}</div>
      <script>import("/src/client.tsx")</script>
    </body>
  </html>
);
