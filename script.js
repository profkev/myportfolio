async function downloadPricingPDF() {
    const { jsPDF } = window.jspdf;
  
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
  
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
  
    // Define Colors
    const colors = {
      orange: [255, 87, 51],
      yellow: [255, 204, 0],
      teal: [64, 224, 208],
      pink: [255, 105, 180],
      cyan: [0, 255, 255],
      headerBackground: [245, 245, 245], // Light grey for header background
      primary: [33, 37, 41], // Dark grey (titles)
    };
  
    const pricing = [
      { title: "Landing Page Website", features: ["1 – 3 responsive pages", "Contact page", "Landing Page"], price: "Ksh 10,000 – Ksh 20,000" },
      { title: "Small Business Website", features: ["Several pages", "Social Media Integration", "Google My Business Page", "Google Analytics"], price: "Ksh 20,000 – Ksh 30,000" },
      { title: "Ecommerce Website", features: ["Ecommerce Tools", "Order Management System", "Live Chat", "Delivery Solutions", "Payment Integration"], price: "Ksh 35,000 – Ksh 70,000" },
      { title: "Corporate Website", features: ["Advanced functionality", "Unlimited Subpages", "Bespoke Design", "Database Population", "CRM Integration"], price: "Ksh 45,000 – Ksh 90,000" },
      { title: "System Development", features: ["Custom Software Solutions", "Process Automation", "Scalable Systems", "Database Design"], price: "Ksh 50,000 – Ksh 150,000" },
      { title: "POS Systems", features: ["Inventory Management", "Real-Time Sales Tracking", "Payment Integration", "Detailed Reporting"], price: "Ksh 40,000 – Ksh 120,000" },
      { title: "Logo Design", features: ["Unique Logo Concepts", "Branding Guidelines", "Revisions Included", "High-Quality Formats"], price: "Ksh 5,000 – Ksh 15,000" },
      { title: "Software Installation", features: ["Licensed Software", "Integration Support", "Training & Tutorials", "Technical Assistance"], price: "Ksh 10,000 – Ksh 50,000" },
    ];
  
    const drawPageContent = () => {
      // Header Background
      doc.setFillColor(colors.headerBackground[0], colors.headerBackground[1], colors.headerBackground[2]);
      doc.rect(0, 0, pageWidth, 30, "F"); // Filled rectangle for header background
  
      // Logo
      doc.setFont("Orbitron", "bold");
      doc.setFontSize(24);
      doc.setTextColor(colors.orange[0], colors.orange[1], colors.orange[2]);
      doc.text("K", pageWidth / 2 - 35, 15, { align: "center" });
  
      doc.setTextColor(colors.yellow[0], colors.yellow[1], colors.yellow[2]);
      doc.text("E", pageWidth / 2 - 20, 15, { align: "center" });
  
      doc.setTextColor(colors.teal[0], colors.teal[1], colors.teal[2]);
      doc.text("V", pageWidth / 2 - 5, 15, { align: "center" });
  
      doc.setTextColor(colors.pink[0], colors.pink[1], colors.pink[2]);
      doc.text(" ", pageWidth / 2 - 5, 15, { align: "center" });

      doc.setFontSize(24);
      doc.setTextColor(colors.cyan[0], colors.cyan[1], colors.cyan[2]);
      doc.text("XPLORE", pageWidth / 2 + 25, 15, { align: "center" });
  
      // Subtitle
      doc.setFont("helvetica", "italic");
      doc.setFontSize(12);
      doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
      doc.text("Modern Web Solutions Tailored to Your Needs", pageWidth / 2, 25, { align: "center" });
  
      // Watermark
      doc.setTextColor(240, 240, 240);
      doc.setFontSize(60);
      doc.text("KEVEXPLORE", pageWidth / 2, pageHeight / 2, {
        align: "center",
        angle: 45,
        baseline: "bottom",
      });
      doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]); // Reset text color
  
      // Footer
      doc.setDrawColor(200, 200, 200);
      doc.line(10, 285, 200, 285);
      doc.setFont("helvetica", "italic");
      doc.setFontSize(10);
      doc.text("KEVEXPLORE | Nairobi | Phone: 0708328905", pageWidth / 2, 290, { align: "center" });
  
      // Stamp
      doc.setDrawColor(150, 0, 0); // Dark red for ink effect
      doc.circle(pageWidth / 2, 270, 15, "S"); // Outer circle
      doc.circle(pageWidth / 2, 270, 13, "S"); // Inner circle
      doc.setFont("helvetica", "bold");
      doc.setFontSize(10);
      doc.text("APPROVED", pageWidth / 2, 266, { align: "center" });
      doc.setFontSize(8);
      doc.text("KEVEXPLORE", pageWidth / 2, 273, { align: "center" });
    };
  
    let y = 40;
    pricing.forEach((item) => {
      if (y > 250) {
        drawPageContent();
        doc.addPage();
        y = 40; // Reset Y position for the new page
      }
  
      // Section Box
      doc.setDrawColor(220, 220, 220); // Light grey border
      doc.setFillColor(colors.headerBackground[0], colors.headerBackground[1], colors.headerBackground[2]); // Light grey fill
      doc.rect(10, y, 190, 40, "FD"); // Filled rectangle
  
      // Title
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
      doc.text(item.title, 15, y + 8);
  
      // Features
      let featureY = y + 14;
      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.setTextColor(66, 66, 66); // Mid grey for features
      item.features.forEach((feature) => {
        doc.text(`• ${feature}`, 20, featureY);
        featureY += 6;
      });
  
      // Price
      doc.setFont("helvetica", "bold");
      doc.setTextColor(colors.orange[0], colors.orange[1], colors.orange[2]); // Orange for price
      doc.text(item.price, 20, featureY);
  
      // Move to next section
      y += 50;
    });
  
    // Draw the last page's header, footer, and stamp
    drawPageContent();
  
    // Save PDF
    doc.save("KEVEXPLORE_Pricing.pdf");
  }
  
  

  




  
  
  document.addEventListener("DOMContentLoaded", () => {
    const heroSection = document.getElementById("hero-section");
  
    // List of hero images
    const images = [
      "./images/hero1.avif",
      "./images/hero2.avif",
      "./images/hero3.avif",
      "./images/hero4.avif",
    ];
  
    let currentImageIndex = 0;
  
    // Function to change the background image
    function changeHeroImage() {
      currentImageIndex = (currentImageIndex + 1) % images.length; // Loop through images
      heroSection.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    }
  
    // Set interval to change images every 5 seconds
    setInterval(changeHeroImage, 5000);
  });
  document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
  
    menuToggle.addEventListener("click", () => {
      // Toggle the visibility of the mobile menu
      mobileMenu.classList.toggle("hidden");
      mobileMenu.classList.toggle("block");
    });
  });
  
  
  