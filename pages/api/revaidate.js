export default async function handler(req, res) {
    console.log("res" , req)
    // Check for secret to confirm this is a valid request
    if (req.query.secret !== process.env.MY_SECRET_TOKEN) {
      return res.status(401).json({ message: 'Invalid token' });
    }
   
    try {
      await res.revalidate("/services/ecommerce");
      console.log("process.env.MY_SECRET_TOKEN", process.env.MY_SECRET_TOKEN)
      return res.json({ revalidated: true });
    } catch (err) {
      // If there was an error, Next.js will continue
      // to show the last successfully generated page
      return res.status(500).send('Error revalidating');
    }
  }