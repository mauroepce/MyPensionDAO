import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x42B1C0b24f086BCd5b2F8eC4099eecAd0e411f01",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "PensionDAO Membership",
        description: "This NFT will give you access to PensionDAO!",
        image: readFileSync("scripts/pensionDAO_token.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()