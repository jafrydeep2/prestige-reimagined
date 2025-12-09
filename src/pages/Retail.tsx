import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { EnquireSidebar } from "@/components/EnquireSidebar";

interface RetailProject {
  id: string;
  title: string;
  description: string;
  image: string;
}

const projects: RetailProject[] = [
  // Hospitality projects
  {
    id: "3",
    title: "Sheraton Grand",
    description: "Hotel & Convention Center at Whitefield",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/de91e3b0-447f-4279-a0d9-e90fe3f8f138.webp",
  },
  {
    id: "4",
    title: "Bayfront Suites",
    description: "Spa & Resort in Yelahanka",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/042e94e1-5982-4266-9000-148d8411988d.webp",
  },
  {
    id: "6",
    title: "JW Marriott Bengaluru Golfshire",
    description: "Resort & Spa in Devanahalli",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/537a53f8-4a7d-474f-b633-fef4c8261733.webp",
  },
  {
    id: "9",
    title: "Resort & Spa in Goa",
    description: "Luxury Resort & Spa",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/c74734e2-a56f-4b4c-a2db-4c1b144e8cfc.webp",
  },
  {
    id: "10",
    title: "Golfshire Club",
    description: "18 Hole Championship Golf Course",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/20d19d30-399b-4273-a5ba-9ef009e97f1c.webp",
  },
  {
    id: "11",
    title: "ITC Taj",
    description: "A Luxury Collection Resort & Spa",
    image: "https://www.itchotels.com/content/dam/itchotels/in/umbrella/itc/hotels/itcmughal-agra/images/overview-landing-page/overview/desktop/spa-pool.png",
  },
  {
    id: "12",
    title: "ITC Collection",
    description: "A collection of luxury hotels and resorts",
    image: "https://static.businessworld.in/1538135698_xkt4dU_cropped_2_.png",
  },
  {
    id: "13",
    title: "Meridian Gulf",
    description: "Luxury and Prestige Outlets",
    image: "https://www.modabahrain.com/wp-content/uploads/2024/04/Prestige-Outlets-1024x768.jpg",
  },
  // Retail projects
  {
    id: "14",
    title: "The Collection",
    description: "India's first Luxury Shopping Mall",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/0eb35362-ddfc-41f5-b461-2403c5d5c2ec.webp",
  },
  {
    id: "15",
    title: "Forum",
    description: "Premium Shopping Destination",
    image: "https://prestigecorporatesite.s3.ap-south-1.amazonaws.com/projectimage/a4ca9e96-6941-4581-8680-4ce77b7cc0eb.webp",
  },
];

const Retail = () => {
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
            className="font-display text-3xl lg:text-4xl text-gold mb-10"
          >
            Retail Projects
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-background border border-border rounded-sm overflow-hidden group hover:shadow-elegant transition-shadow duration-300"
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-[4/3] p-4 pb-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-sm transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-display text-lg text-gold mb-1 group-hover:text-gold-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Retail;
