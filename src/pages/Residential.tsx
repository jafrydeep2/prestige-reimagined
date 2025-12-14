import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";
import { EnquiryFormSidebar } from "@/components/EnquiryFormSidebar";
import { BookVisitSidebar } from "@/components/BookVisitSidebar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectSidebar } from "@/components/ProjectSidebar";


import res1 from "@/assets/residential/res-1.png";
import res2 from "@/assets/residential/res-2.png";
import res3 from "@/assets/residential/res-3.png";
import res4 from "@/assets/residential/res-4.png";
import res5 from "@/assets/residential/res-5.png";
import res6 from "@/assets/residential/res-6.png";

import res7 from "@/assets/residential/res-7.png";
import res8 from "@/assets/residential/res-8.png";
import res9 from "@/assets/residential/res-9.png";
import res10 from "@/assets/residential/res-10.png";
import res11 from "@/assets/residential/res-11.png";
import res12 from "@/assets/residential/res-12.png";
import res13 from "@/assets/residential/res-13.png";
import res14 from "@/assets/residential/res-14.png";
import res15 from "@/assets/residential/res-15.png";
import res16 from "@/assets/residential/res-16.png";
import res17 from "@/assets/residential/res-17.png";
import res18 from "@/assets/residential/res-18.png";
import res19 from "@/assets/residential/res-19.png";
import res20 from "@/assets/residential/res-20.png";
import res21 from "@/assets/residential/res-21.png";
import res22 from "@/assets/residential/res-22.png";
import res23 from "@/assets/residential/res-23.png";
import res24 from "@/assets/residential/res-24.png";
import res25 from "@/assets/residential/res-25.png";
import res26 from "@/assets/residential/res-26.png";
import res27 from "@/assets/residential/res-27.png";
import res28 from "@/assets/residential/res-28.png";
import res29 from "@/assets/residential/res-29.png";
import res30 from "@/assets/residential/res-30.png";
import res31 from "@/assets/residential/res-31.png";
import res32 from "@/assets/residential/res-32.png";


import r1 from "@/assets/landmark/r1.webp";
import r2 from "@/assets/landmark/r2.webp";
import r3 from "@/assets/landmark/r3.webp";
import r4 from "@/assets/landmark/r4.webp";
import r5 from "@/assets/landmark/r5.webp";
import r6 from "@/assets/landmark/r6.avif";
import fr1 from "@/assets/landmark/fr-1.jpg";
import fr2 from "@/assets/landmark/fr-2.jpg";
import fr3 from "@/assets/landmark/fr-3.jpg";

const countries = [
  { name: "India", count: 12 },
  { name: "Oman", count: 10 },
  { name: "Kuwait", count: 8 },
  { name: "Qatar", count: 4 },
  { name: "Saudi", count: 3 },
  { name: "Singapore", count: 3 },
];

const projects: Project[] = [
  // India - 12 projects
  {
    id: "1",
    title: "Meridian SkyCourt Residences",
    location: "India",
    price: "$348k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res1,
    projectType: "Apartment",
    bedrooms: "2, 3 & 4 BHK",
    developmentSize: "12.5 acres",
  },
  {
    id: "2",
    title: "Cedarstone Residency",
    location: "India",
    price: "$225k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res2,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "8.3 acres",
  },
  {
    id: "3",
    title: "Meridian Crestview Towers",
    location: "India",
    price: "$450k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "15.2 acres",
  },
  {
    id: "4",
    title: "Meridian Seaview Habitat",
    location: "India",
    price: "$280k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r1,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "22.4 acres",
  },
  {
    id: "5",
    title: "Falcon City",
    location: "India",
    price: "$320k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "blue",
    image: r2,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.8 acres",
  },
  {
    id: "6",
    title: "Techno City",
    location: "India",
    price: "$520k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r3,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.6 acres",
  },
  {
    id: "7",
    title: "Jindal Techno City",
    location: "India",
    price: "$380k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r4,
    projectType: "Apartment",
    bedrooms: "2, 3 & 4 BHK",
    developmentSize: "14.2 acres",
  },
  {
    id: "8",
    title: "Acropolis Meridian Athenes",
    location: "India",
    price: "$295k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: r5,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "25.3 acres",
  },
  {
    id: "9",
    title: "Lakeview Luxe Villas",
    location: "India",
    price: "$410k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "blue",
    image: r6,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "11.5 acres",
  },
  {
    id: "10",
    title: "Riverbend Residences",
    location: "India",
    price: "$360k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr1,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "16.8 acres",
  },
  {
    id: "11",
    title: "Meridian Opal Ridge",
    location: "India",
    price: "$275k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: fr2,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "9.4 acres",
  },
  {
    id: "12",
    title: "Amber Oaks Residency",
    location: "India",
    price: "$440k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: fr3,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "20.7 acres",
  },
  // Oman - 10 projects
  {
    id: "13",
    title: "Meridian Harmony Homes",
    location: "Oman",
    price: "$900k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res4,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "13.2 acres",
  },
  {
    id: "14",
    title: "Ivory Bay Residences",
    location: "Oman",
    price: "$2.5 million Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res5,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "17.5 acres",
  },
  {
    id: "15",
    title: "Meridian Greenstone Enclave",
    location: "Oman",
    price: "$3.7 million Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res6,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "24.1 acres",
  },
  {
    id: "16",
    title: "Suncrest Avenue",
    location: "Oman",
    price: "$350k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res7,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.6 acres",
  },
  {
    id: "17",
    title: "Meridian Eden Springs",
    location: "Oman",
    price: "$480k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res8,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "19.3 acres",
  },
  {
    id: "18",
    title: "Willowstone Gardens",
    location: "Oman",
    price: "$290k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res9,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "8.9 acres",
  },
  {
    id: "19",
    title: "Meridian Nova Homes",
    location: "Oman",
    price: "$395k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res10,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "21.8 acres",
  },
  {
    id: "20",
    title: "Maplebrook Homes",
    location: "Oman",
    price: "$330k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: res11,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "12.4 acres",
  },
  {
    id: "21",
    title: "Meridian Sapphire Residency",
    location: "Oman",
    price: "$460k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res12,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "16.7 acres",
  },
  {
    id: "22",
    title: "Urban Vista Residences",
    location: "Oman",
    price: "$270k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res13,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "7.5 acres",
  },
  // Kuwait - 8 projects
  {
    id: "23",
    title: "Meridian Lakefront Residences",
    location: "Kuwait",
    price: "$510k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res14,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "20.2 acres",
  },
  // Casagrand Suncity
  {
    id: "233",
    title: "Casagrand Suncity",
    location: "Kuwait",
    price: "$340k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res15,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "11.8 acres",
  },
  {
    id: "24",
    title: "Crescent Meadows",
    location: "Kuwait",
    price: "$340k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res16,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "11.8 acres",
  },
  {
    id: "25",
    title: "Meridian Valley Crest Villas",
    location: "Kuwait",
    price: "$400k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res17,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "26.5 acres",
  },
  {
    id: "26",
    title: "Horizon Springs",
    location: "Kuwait",
    price: "$285k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: res18,
    projectType: "Apartment",
    bedrooms: "1, 2 & 3 BHK",
    developmentSize: "9.1 acres",
  },
  {
    id: "27",
    title: "Meridian Urban Crest",
    location: "Kuwait",
    price: "$430k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res19,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.4 acres",
  },
  {
    id: "28",
    title: "Aurora Parkside",
    location: "Kuwait",
    price: "$370k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res20,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "13.7 acres",
  },
  {
    id: "29",
    title: "Meridian Vertex Living",
    location: "Kuwait",
    price: "$490k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res21,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "23.9 acres",
  },
  {
    id: "30",
    title: "Grand Elm Enclave",
    location: "Kuwait",
    price: "$315k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: res22,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "10.3 acres",
  },
  // Qatar - 4 projects
  {
    id: "31",
    title: "Meridian Magnolia Court",
    location: "Qatar",
    price: "$550k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res23,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "22.1 acres",
  },
  {
    id: "32",
    title: "Palmcrest Gardens",
    location: "Qatar",
    price: "$420k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res24,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "14.6 acres",
  },
  {
    id: "33",
    title: "Meridian Maple Heights",
    location: "Qatar",
    price: "$580k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res25,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "28.3 acres",
  },
  {
    id: "34",
    title: "Silverleaf Residences",
    location: "Qatar",
    price: "$465k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: res26,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "19.8 acres",
  },
  // Saudi - 3 projects
  {
    id: "35",
    title: "Meridian Crown Vista",
    location: "Saudi",
    price: "$520k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res27,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "21.5 acres",
  },
  {
    id: "36",
    title: "Opaline Heights",
    location: "Saudi",
    price: "$390k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res28,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "15.9 acres",
  },
  {
    id: "37",
    title: "Meridian Grand Arcadia",
    location: "Saudi",
    price: "$600k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res29,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "30.2 acres",
  },
  // Singapore - 3 projects
  {
    id: "38",
    title: "Lakeview Serenade",
    location: "Singapore",
    price: "$850k Onwards",
    badge: "NEW LAUNCH",
    badgeColor: "gold",
    image: res30,
    projectType: "Apartment",
    bedrooms: "2 & 3 BHK",
    developmentSize: "8.7 acres",
  },
  {
    id: "39",
    title: "Meridian Azure Heights",
    location: "Singapore",
    price: "$920k Onwards",
    badge: "READY TO MOVE",
    badgeColor: "green",
    image: res31,
    projectType: "Apartment",
    bedrooms: "3 & 4 BHK",
    developmentSize: "12.3 acres",
  },
  {
    id: "40",
    title: "Crownleaf Villas",
    location: "Singapore",
    price: "$780k Onwards",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: res32,
    projectType: "Villa",
    bedrooms: "3 & 4 BHK",
    developmentSize: "18.6 acres",
  },
];

const Residential = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [enquirySidebar, setEnquirySidebar] = useState<{ isOpen: boolean; project: Project | null }>({
    isOpen: false,
    project: null,
  });
  const [bookVisitSidebar, setBookVisitSidebar] = useState<{ isOpen: boolean; project: Project | null }>({
    isOpen: false,
    project: null,
  });

  const getBadgePriority = (badge: string): number => {
    switch (badge.toUpperCase()) {
      case "NEW LAUNCH":
        return 1;
      case "UNDER CONSTRUCTION":
        return 2;
      case "READY TO MOVE":
        return 3;
      default:
        return 4;
    }
  };

  const filteredProjects = (
    selectedCountry === "all"
      ? projects
      : projects.filter((p) =>
        p.location.toLowerCase() === selectedCountry.toLowerCase()
      )
  ).sort((a, b) => getBadgePriority(a.badge) - getBadgePriority(b.badge));

  const handleEnquireClick = (project: Project) => {
    setEnquirySidebar({ isOpen: true, project });
  };

  const handleBookVisitClick = (project: Project) => {
    setBookVisitSidebar({ isOpen: true, project });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EnquireSidebar />

      <main className="pt-24 lg:pt-28 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-3xl lg:text-4xl text-gold mb-6"
          >
            Residential Projects
          </motion.h1>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <ProjectSidebar
              cities={countries}
              selectedCity={selectedCountry}
              onSelectCity={setSelectedCountry}
              allLabel="All Properties"
            />

            {/* Projects Grid */}
            <div className="flex-1">
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    onEnquireClick={handleEnquireClick}
                    onBookVisitClick={handleBookVisitClick}
                  />
                ))}
              </div>
              {filteredProjects.length === 0 && (
                <div className="text-center py-12 text-muted-foreground">
                  No projects found in this location.
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Enquiry Form Sidebar */}
      <EnquiryFormSidebar
        isOpen={enquirySidebar.isOpen}
        onClose={() => setEnquirySidebar({ isOpen: false, project: null })}
        projectTitle={enquirySidebar.project?.title}
        projectPrice={enquirySidebar.project?.price}
      />

      {/* Book Visit Sidebar */}
      <BookVisitSidebar
        isOpen={bookVisitSidebar.isOpen}
        onClose={() => setBookVisitSidebar({ isOpen: false, project: null })}
        projectTitle={bookVisitSidebar.project?.title}
      />
    </div>
  );
};

export default Residential;
