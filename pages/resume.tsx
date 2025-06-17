import React, { useEffect } from "react";
import Head from "next/head";
import { useMediaQuery } from "react-responsive";

declare global {
  interface Window {
    AdobeDC: any;
    adobe_dc_sdk: any;
    adobe_dc_view_sdk: any;
  }
}
interface ResumeProps {
  adobeClientId: string;
}

function Resume({ adobeClientId }: ResumeProps) {
  const isMobile = useMediaQuery({ query: "(max-width: 846px)" });
  useEffect(() => {
    const initializeViewer = () => {
      if (isMobile || !adobeClientId) return; // Don't initialize if mobile, or no client ID

      // Ensure AdobeDC.View is available
      if (window.AdobeDC && window.AdobeDC.View) {
        const adobeDiv = document.getElementById("adobe-dc-view");
        // Prevent re-initialization if the div already has content from the viewer
        if (adobeDiv && adobeDiv.childElementCount > 0) {
          // console.log("Adobe DC View already initialized in this div.");
          return;
        }

        try {
          const adobeDCView = new window.AdobeDC.View({
            clientId: adobeClientId,
            divId: "adobe-dc-view",
          });
          adobeDCView.previewFile(
            {
              content: {
                location: {
                  url: process.env.NEXT_PUBLIC_RESUME_LINK,
                },
              },
              metaData: { fileName: "Rohit_Kumar_R.pdf" },
            },
            {
              embedMode: "FULL_WINDOW",
              defaultViewMode: "FIT_WIDTH",
              showFullScreen: true,
              showAnnotationTools: false, // Keep false to avoid potential licensing/feature issues
              showZoomControl: true,
              showDownloadPDF: true,
            }
          );
        } catch (error) {
          console.error("Error initializing Adobe DC View:", error);
        }
      }
    };

    // Listen for the SDK ready event
    document.addEventListener("adobe_dc_view_sdk.ready", initializeViewer);

    // If SDK is already loaded and ready (e.g. from a previous page navigation or HMR)
    if (window.AdobeDC && window.AdobeDC.View) {
      initializeViewer();
    } else if (
      !document.querySelector(
        'script[src="https://acrobatservices.adobe.com/view-sdk/viewer.js"]'
      )
    ) {
      // If the script isn't on the page, add it.
      const viewerScript = document.createElement("script");
      viewerScript.src = "https://acrobatservices.adobe.com/view-sdk/viewer.js";
      document.body.appendChild(viewerScript);
    }
    // If the script tag exists but AdobeDC.View is not yet ready, the event listener will handle initialization.

    return () => {
      document.removeEventListener("adobe_dc_view_sdk.ready", initializeViewer);
    };
  }, [adobeClientId, isMobile]);

  return (
    <div>
      <Head>
        <title>Rohit Kumar R | Résumé</title>
      </Head>
      <main
        className="flex-1 p-4 mb-20 flex flex-col items-center justify-center"
        style={{ height: "100vh", paddingTop: "5rem" }}
      >
        <p className="text-neutral-200 text-2xl font-bold mb-4 text-center">
          {isMobile
            ? "It seems like you are on a mobile device! For a better experience, we recommend that you please "
            : "If you have troubles viewing the PDF, you can "}
          <a
            href={process.env.NEXT_PUBLIC_RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 underline"
          >
            click here to view/download it
          </a>
          .
        </p>
        {!isMobile && <div id="adobe-dc-view" className="max-w-5xl mx-auto" />}
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const adobeClientId = process.env.ADOBE_CLIENT_ID ?? null;

  return {
    props: {
      adobeClientId,
    },
    // revalidate: 300,
  };
}

export default Resume;
// export const runtime = 'experimental-edge';
