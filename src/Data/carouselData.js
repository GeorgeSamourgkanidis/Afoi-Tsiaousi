const carouselData = [
  {
    title: "Elpida Resort & Spa",
    year: "2008-2022",
    name: "elpida",
    photos: 10,
    defaultPhoto: "f5",

    description: {
      gr: `Στη προσπάθεια εναρμόνισης της εργονομίας και αισθητικής, πραγματοποιήθηκε η τοποθέτηση νέων συστημάτων σε πολυτελές ξενοδοχείο στην κοιλάδα των Σερρών στους χώρους της ρεσεψιόν, αίθουσας εκδηλώσεων, μπάρ, εστιατορίου καθώς επίσης και στον χώρο της πισίνας/spa.`,
      en: `In an effort to harmonize ergonomics and aesthetics, new systems were installed in a luxury hotel in the valley of Serres in the areas of the reception, event hall, bar, restaurant as well as in the pool/spa area.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil M9400/M11000
          </li>
          <li>
            <strong>Αίθριο: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
          <li>
            <strong>Υαλοπετάσματα: </strong>
            Alumil M3
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil M9400/M11000
          </li>
          <li>
            <strong>Atrium: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
          <li>
            <strong>Curtain Walls: </strong>
            Alumil M3
          </li>
        </>
      )
    }
  },
  {
    title: "Germany",
    year: "2019",
    name: "germany",
    photos: 13,
    defaultPhoto: "f1",
    description: {
      gr: `Ένα ακόμη βιομηχανικό έργο αυτή τη φορά σε περιοχή της Γερμανίας ολοκληρώθηκε με απόλυτη επιτυχία από την εταιρεία μας. Το εύρος των εργασιών περιλαμβάνει από τοποθέτηση σκάλας βαραίου τύπου μέχρι αυτόματες πτυσσόμενες πόρτες.`,
      en: `Another industrial project, this time in an area of Germany, was completed with complete success by our company. The scope of work includes everything from heavy-duty ladder installation to automatic folding doors.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil M9400
          </li>
          <li>
            <strong>Αυτόματες Πτυσόμενες Πόρτες: </strong>
            Alumil M9400
          </li>
          <li>
            <strong>Ηλεκτρικές Αυτόματες Πόρτες Geze</strong>
          </li>
          <li>
            <strong>Σκάλα Βαρέου Βιομηχανικού Τύπου</strong>
          </li>
          <li>
            <strong>Πυράντοχη Πόρτα R60'</strong>
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil M9400
          </li>
          <li>
            <strong>Automatic Folding Doors: </strong>
            Alumil M9400
          </li>
          <li>
            <strong>Geze Electric Automatic Doors</strong>
          </li>
          <li>
            <strong>Industrial Heavy-Duty Ladder</strong>
          </li>
          <li>
            <strong>Fireproof Door R60'</strong>
          </li>
        </>
      )
    }
  },
  {
    title: "Bonatti - J&P",
    year: "2016",
    name: "bonatti",
    photos: 9,
    defaultPhoto: "f1",
    description: {
      gr: `Κατασκευή μεταλλικών οικίσκων (τύπου isobox) για την προστασία και διαμονή των Security στη διεκπεραίωση της κατασκευής του Διαδριατικού Αγωγού Φυσικού Αερίου (TAP) στον ελλαδικό χώρο.`,
      en: `Construction of metal houses (isobox type) for the protection and accommodation of Security during the construction of the Trans-Adriatic Natural Gas Pipeline (TAP) in Greece.`
    },
    list: {
      gr: null,
      en: null
    }
  },
  {
    title: "Stone House",
    year: "2018",
    name: "stone",
    photos: 8,
    defaultPhoto: "f1",
    description: {
      gr: `Η ανάγκη για αναδιαμόρφωση μιας πέτρινης παραδοσιακής κατοικίας δημιούργησε την πρόκληση στην εταιρεία μας για συνδυασμό του παλιού με το σήμερα.`,
      en: `The need to remodel a traditional stone house created the challenge for our company to combine the old with the present.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil M20000 Apollo
          </li>
          <li>
            <strong>Κιγκλιδώματα Αλουμινίου: </strong>
            Alumil M8200
          </li>
          <li>
            <strong>Λοιπές Μεταλλικές Κατασκευές</strong>
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil M20000 Apollo
          </li>
          <li>
            <strong>Aluminium Railings: </strong>
            Alumil M8200
          </li>
          <li>
            <strong>Other Metal Constructions</strong>
          </li>
        </>
      )
    }
  },
  {
    title: "Supreme Maisonette",
    year: "2018",
    name: "supreme",
    photos: 12,
    defaultPhoto: "f13",
    description: {
      gr: `Σε ένα άκρως απαιτητικό project, η εταιρεία μας ανέλαβε τον σχεδιασμό και την τοποθέτηση των πλέον κορυφαίων συστημάτων του ομίλου Alumil σε μεζονέτα ιδιαίτερης αισθητικής τριών επιπέδων.`,
      en: `In a highly demanding project, our company undertook the design and installation of the most advanced systems of the Alumil group in a maisonette of special aesthetics on three levels.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil Μ20000 Apollo
          </li>
          <li>
            <strong>Ανασηκούμενα-Ανασυρόμενα: </strong>
            Alumil Supreme S700/S450
          </li>
          <li>
            <strong>Αίθρια: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil Μ20000 Apollo
          </li>
          <li>
            <strong>Lift & Slide: </strong>
            Alumil Supreme S700/S450
          </li>
          <li>
            <strong>Atriums: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
        </>
      )
    }
  },
  {
    title: "Complexes",
    year: "2000-2022",
    name: "complexes",
    photos: 25,
    defaultPhoto: "f1",
    description: {
      gr: `Ανάληψη, σχεδίαση και διεκπεραίωση συγκροτημάτων/οικισμών με τις πλέον κατάλληλες προδιαγραφές για την επίτευξη υψηλής ενεργειακής και ηχομονωτικής απόδοσης.`,
      en: `Construction, design and completion of complexes/settlements with the most appropriate specifications to achieve high energy and sound insulation performance.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil M9400/M11000
          </li>
          <li>
            <strong>Ανασηκούμενα-Ανασυρόμενα: </strong>
            Alumil M9200
          </li>
          <li>
            <strong>Συρόμενα Βαρέου Τύπου: </strong>
            Alumil M12000
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil M9400/M11000
          </li>
          <li>
            <strong>Lift & Slide: </strong>
            Alumil M9200
          </li>
          <li>
            <strong>Sliding Heavy Type: </strong>
            Alumil M12000
          </li>
        </>
      )
    }
  },
  {
    title: "Constructions",
    year: "2001-2022",
    name: "constructions",
    photos: 24,
    defaultPhoto: "f5",
    description: {
      gr: `Σχεδίαση και κατασκευή ιδιαίτερων ευρεσιτεχνιών για την κάλυψη οποιοδήποτε αναγκών σε συνδυασμό με την ασφάλιση και διαμόρφωση του χώρου σας.`,
      en: `Design and construction of special patents to cover any needs in combination with the insurance and configuration of your space.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Αίθρια: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
          <li>
            <strong>Μεταλικά Στέγαστρα</strong>
          </li>
          <li>
            <strong>Μεταλικές Πόρτες Αυλόγυρου</strong>
          </li>
          <li>
            <strong>Κιγκλιδώματα Αλουμινίου</strong>
          </li>
          <li>
            <strong>Κιγκλιδώματα Μεταλλικού Τύπου Inox</strong>
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Atriums: </strong>
            Alumil M10800 Skylight Alutherm
          </li>
          <li>
            <strong>Metal Canopy</strong>
          </li>
          <li>
            <strong>Metal Gates</strong>
          </li>
          <li>
            <strong>Aluminium Railings</strong>
          </li>
          <li>
            <strong>Metal Railings Type Inox</strong>
          </li>
        </>
      )
    }
  },
  {
    title: "More Unique Projects",
    year: "2004-2022",
    name: "more",
    photos: 27,
    defaultPhoto: "f12",
    description: {
      gr: `Ένα δείγμα διαφόρων τύπου έργων και κατασκευών καθώς επίσης και του τρόπου μεταφοράς ογκωδών υαλοπινάκων.`,
      en: `A sample of various types of projects and constructions as well as how to transport bulky curtain walls.`
    },
    list: {
      gr: (
        <>
          <li>
            <strong>Ανοιγόμενα-Τοξοτά: </strong>
            Alumil M20000
          </li>
          <li>
            <strong>Ανοιγόμενα-Σταθερά: </strong>
            Alumil M11500 Alutherm Super Plus
          </li>
          <li>
            <strong>Ανασηκούμενα-Ανασυρόμενα: </strong>
            Alumil M5560
          </li>
          <li>
            <strong>Κιγκλιδώματα Αλουμινίου: </strong>
            Alumil M8200
          </li>
          <li>
            <strong>Εσωτερικά Διαχωριστικά Γραφείου</strong>
          </li>
        </>
      ),
      en: (
        <>
          <li>
            <strong>Hinged-Arched: </strong>
            Alumil M20000
          </li>
          <li>
            <strong>Hinged-Fixed: </strong>
            Alumil M11500 Alutherm Super Plus
          </li>
          <li>
            <strong>Lift & Slide: </strong>
            Alumil M5560
          </li>
          <li>
            <strong>Aluminium Railings: </strong>
            Alumil M8200
          </li>
          <li>
            <strong>Interior Partitioning Systems</strong>
          </li>
        </>
      )
    }
  }
];

export default carouselData;
