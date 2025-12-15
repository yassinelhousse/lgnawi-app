import sequelize from "./config/database.js";
import EventInfo from "./models/EventInfo.js";
import Artist from "./models/Artist.js";

// OPTIONAL: load associations
import "./models/associations.js";

async function seedDatabase() {
  try {
    console.log("🔄 Syncing database...");
    await sequelize.sync({ force: true }); 

    console.log("🌍 Seeding EventInfo...");
    await EventInfo.create({
      title: "La Grande Soirée Gnawa – Agadir",
      description:
        "Une nuit exceptionnelle dédiée à la culture et à la musique Gnawa, réunissant les meilleurs artistes du Maroc.",
      date: "24 Janvier 2025",
      location: "Agadir – Place Al Amal",
      banner_image_url: "https://example.com/banner.jpg",
    });

    console.log("🎵 Seeding Artists...");
    await Artist.bulkCreate([
      {
        name: "Maâlem Hamid El Kasri",
        bio: "Icône de la musique Gnawa avec une carrière riche et internationale.",
        photo_url: "https://ik.imagekit.io/9yn2suj2g/guinea%20mo.jpg",
        performance_time: "21:00",
      },
      {
        name: "Maâlem Hassan Boussou",
        bio: "Fils du légendaire Hmida Boussou, mélange tradition et modernité.",
        photo_url: "https://ik.imagekit.io/9yn2suj2g/Hamid-Kasri.jpg",
        performance_time: "22:00",
      },
      {
        name: "Maâlem Abderrahim Akka",
        bio: "Artiste Gnawa marocain reconnu pour أسلوبه الروحي القوي.",
        photo_url: "https://ik.imagekit.io/9yn2suj2g/91103440-64106336.jpg",
        performance_time: "23:00",
      },
    ]);

    console.log("✅ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seedDatabase();
