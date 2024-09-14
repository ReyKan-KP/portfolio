// components/Loader.tsx
import dynamic from "next/dynamic";

const Loading = dynamic(() => import("./SVGLoader"), {
  ssr: false, // Ensure it only renders on the client side
  // loading: () => <p>Loading...</p>, // Optional: Add a fallback
});

export default Loading;
