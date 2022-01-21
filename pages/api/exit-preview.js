export default async function exit(req, res) {
  // Exit the current user from "Preview Mode".
  res.clearPreviewData();

  // Redirect the user back to the actual page or index page.
  res.writeHead(307, {
    Location: req?.query?.slug ? `/${req?.query?.slug}` : "/",
  });
  res.end();
}
