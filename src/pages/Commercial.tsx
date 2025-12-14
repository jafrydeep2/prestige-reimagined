import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";
import { EnquiryFormSidebar } from "@/components/EnquiryFormSidebar";
import { ProjectCard, Project } from "@/components/ProjectCard";
import { ProjectSidebar } from "@/components/ProjectSidebar";

import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";
import c2 from "@/assets/landmark/c2.webp";

import com1 from "@/assets/commercial/com-1.png";
import com2 from "@/assets/commercial/com-2.png";
import com3 from "@/assets/commercial/com-3.png";
import com4 from "@/assets/commercial/com-4.png";
import com5 from "@/assets/commercial/com-5.png";
import com6 from "@/assets/commercial/com-6.png";
import com7 from "@/assets/commercial/com-7.png";
import com8 from "@/assets/commercial/com-8.png";
import com9 from "@/assets/commercial/com-9.png";
import com10 from "@/assets/commercial/com-10.png";
import com11 from "@/assets/commercial/com-11.png";
import com12 from "@/assets/commercial/com-12.png";
import com13 from "@/assets/commercial/com-13.png";
import com14 from "@/assets/commercial/com-14.png";
import com15 from "@/assets/commercial/com-15.png";
import com16 from "@/assets/commercial/com-16.png";

const countries = [
  { name: "India", count: 8 },
  { name: "Oman", count: 4 },
  { name: "Kuwait", count: 5 },
  { name: "Qatar", count: 2 },
  { name: "Saudi", count: 2 },
];

const projects: Project[] = [
  // India - 7 projects
  {
    id: "1",
    title: "Meridian Business Square",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial1,
    developmentSize: "7.2 Acres",
  },
  {
    id: "2",
    title: "Orion TechPoint",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: commercial2,
    developmentSize: "5.8 Acres",
  },
  {
    id: "3",
    title: "Meridian Commerce Hub",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: commercial3,
    developmentSize: "9.4 Acres",
  },
  {
    id: "4",
    title: "Nova Corporate Center",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com1,
    developmentSize: "6.5 Acres",
  },
  {
    id: "5",
    title: "Meridian Infinity Park",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com2,
    developmentSize: "12.3 Acres",
  },
  {
    id: "6",
    title: "Axis Tower One",
    location: "India",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com3,
    developmentSize: "4.7 Acres",
  },
  {
    id: "7",
    title: "Meridian Trade Centre",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com4,
    developmentSize: "8.9 Acres",
  },
  // Oman - 4 projects
  {
    id: "8",
    title: "Skyline Business Plaza",
    location: "Oman",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com5,
    developmentSize: "10.6 Acres",
  },
  {
    id: "9",
    title: "Meridian TechVista",
    location: "Oman",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com6,
    developmentSize: "7.8 Acres",
  },
  {
    id: "10",
    title: "Harbour Edge Offices",
    location: "Oman",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com7,
    developmentSize: "5.4 Acres",
  },
  {
    id: "11",
    title: "Meridian Capitol Towers",
    location: "Oman",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com8,
    developmentSize: "11.2 Acres",
  },
  // Kuwait - 5 projects
  {
    id: "12",
    title: "Crestline Business Park",
    location: "Kuwait",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com9,
    developmentSize: "9.7 Acres",
  },
  {
    id: "13",
    title: "Meridian Orion Chambers",
    location: "Kuwait",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com10,
    developmentSize: "6.3 Acres",
  },
  {
    id: "14",
    title: "Urban Gate Corporate Park",
    location: "India",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com11,
    developmentSize: "13.5 Acres",
  },
  {
    id: "15",
    title: "Meridian Metro Plaza",
    location: "Kuwait",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com12,
    developmentSize: "8.1 Acres",
  },
  {
    id: "16",
    title: "Vertex Business Bay",
    location: "Kuwait",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com13,
    developmentSize: "7.6 Acres",
  },
  // Qatar - 2 projects
  {
    id: "17",
    title: "Meridian Prime Towers",
    location: "Qatar",
    badge: "COMPLETED",
    badgeColor: "green",
    image: com14,
    developmentSize: "14.8 Acres",
  },
  {
    id: "18",
    title: "Centrum IT Park",
    location: "Qatar",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com15,
    developmentSize: "10.2 Acres",
  },
  // Saudi - 2 projects
  {
    id: "19",
    title: "Meridian Boulevard Offices",
    location: "Saudi",
    badge: "UNDER CONSTRUCTION",
    badgeColor: "blue",
    image: com16,
    developmentSize: "11.9 Acres",
  },
  {
    id: "20",
    title: "Gateway Commercial Centre",
    location: "Saudi",
    badge: "COMPLETED",
    badgeColor: "green",
    image: c2,
    developmentSize: "9.3 Acres",
  },
];

const Commercial = () => {
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [enquirySidebar, setEnquirySidebar] = useState<{
    isOpen: boolean;
    project: Project | null;
  }>({ isOpen: false, project: null });

  const filteredProjects = (
    selectedCountry === "all"
      ? projects
      : projects.filter((p) =>
          p.location.toLowerCase() === selectedCountry.toLowerCase()
        )
  ).sort((a, b) => {
    // Sort: UNDER CONSTRUCTION first, then COMPLETED
    if (a.badge === "UNDER CONSTRUCTION" && b.badge === "COMPLETED") return -1;
    if (a.badge === "COMPLETED" && b.badge === "UNDER CONSTRUCTION") return 1;
    return 0;
  });

  const handleEnquireClick = (project: Project) => {
    setEnquirySidebar({ isOpen: true, project });
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
            Commercial Projects
          </motion.h1>

          {/* Custom Search Button */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-8"
          >
            <Button
              variant="outline"
              className="border-border text-foreground hover:bg-muted"
            >
              Custom Search
            </Button>
          </motion.div> */}

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

      <EnquiryFormSidebar
        isOpen={enquirySidebar.isOpen}
        onClose={() => setEnquirySidebar({ isOpen: false, project: null })}
        projectTitle={enquirySidebar.project?.title}
      />
    </div>
  );
};

export default Commercial;
