import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Mock Explore Collections data
app.get("/collections", (req, res) => {
  res.json([
    {
      id: "1",
      title: "Vintage Camera Collection",
      heroImageUrl: "https://picsum.photos/400",
      description: "A curated set of classic film cameras.",
      notableItems: ["Canon AE-1", "Nikon F3", "Pentax K1000"]
    },
    {
      id: "2",
      title: "Estate Jewelry Assortment",
      heroImageUrl: "https://picsum.photos/401",
      description: "Elegant pieces from a lifetime of collecting.",
      notableItems: ["Gold pendant", "Diamond ring", "Pearl necklace"]
    }
  ]);
});

// Publish endpoint
app.post("/publish", (req, res) => {
  console.log("Received publish request:", req.body);
  res.json({ auctionId: "demo-" + Date.now() });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("RescueBid backend running");
});
