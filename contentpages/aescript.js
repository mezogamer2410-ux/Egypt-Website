const contentElement = document.getElementById("ancient-egypt-content");
const versionToggle = document.getElementById("content-version-toggle");
const pageTitle = document.querySelector(".titleh1");
let currentVersion = "english";

const contentVersions = {
  english: [
    {
      heading: "Introduction",
      paragraphs: [
        "This page presents an overview of Ancient Egypt, from the Predynastic Period to the end of Pharaonic rule. The sources describe early Nile Valley cultures, the unification of Egypt, periods of progress, and achievements in architecture, writing, music, and decoration. The Egyptian State Information Service (SIS) dates the Pharaonic Era from about 3000 BCE until Alexander the Great conquered Egypt in 323 BCE. (Source: SIS)",
      ],
    },
    {
      heading: "Predynastic Period",
      paragraphs: [
        "The Predynastic Period lasted from 5500 to 3100 BCE. It came before writing appeared in Egypt at the end of the Neolithic period. Important Nile Valley cultures included Buto, Maadi, Merimda, Badari, Faiyum, and Naqada I, II, and III. Cemeteries, statues, palettes, and stone tools provide evidence about this period. (Source: NMEC)",
      ],
    },
    {
      heading: "Unification of Egypt",
      paragraphs: [
        "The Early Dynastic Period lasted from 3100 to 2686 BCE and included Dynasties I and II. It marked the beginning of recorded history. Attempts to unite northern and southern Egypt ended with the First Dynasty, and Memphis became the capital of the unified state. Famous kings included Narmer and Khasekhemwy. Important archaeological sites included Helwan, Saqqara, Atfih, and Abydos. (Source: NMEC.) SIS states that Menes unified northern and southern Egypt in 3200 BCE, established the first ruling dynasty, and founded Memphis near the Delta to secure Egypt’s unity. This date differs from NMEC’s Early Dynastic Period dates and requires verification. (Sources: SIS and NMEC.)",
      ],
    },
    {
      heading: "Old Kingdom",
      paragraphs: [
        "The Old Kingdom included Dynasties III to VI. It was a period of stability, security, peace, and economic, cultural, and artistic progress. Zoser built the oldest known pyramid at Saqqara. The Giza pyramids were built for Khufu, Khafre, and Menkaure. (Source: SIS.)",
      ],
    },
    {
      heading: "First Intermediate Period",
      paragraphs: [
        "SIS states that the First Intermediate Period began in 2200 BCE. It also states that Mentuhotep II reunified Egypt. (Source: SIS.)",
      ],
    },
     {
      heading: "Middle Kingdom",
      paragraphs: [
        "The Middle Kingdom included Dynasties XI and XII. Amenemhet I played an important role in its renaissance around 2000 BCE. (Source: SIS.)",
      ],
    },
    {
      heading: "Second Intermediate Period",
      paragraphs: [
        "The Second Intermediate Period began in 1725 BCE when the Hyksos attacked Egypt. The Theban princes, led by Ahmose I, expelled them. Ahmose I then built a well-equipped army. (Source: SIS.)",
      ],
    },
    {
      heading: "New Kingdom",
      paragraphs: [
        "SIS calls Dynasties XVIII–XX the “Modern Kingdom” in its English text. This page uses the more familiar term “New Kingdom.” Ramses II signed the first peace treaty in history with the Hittites. (Source: SIS.)",
      ],
    },
    {
      heading: "Late and Ptolemaic Periods",
      paragraphs: [
        "The Late Age included Dynasties XXI to XXX. The Assyrians and Persians occupied Egypt. Pharaonic rule ended during Dynasty XXX when Alexander the Great conquered Egypt. The supplied facts do not describe the Ptolemaic Period separately, so this section needs verification before further details are added. (Source: SIS.)",
      ],
    },
    {
      heading: "Ancient Egyptian Achievements",
      paragraphs: [
        "Ancient Egyptians built 97 pyramids as royal tombs. Famous monuments included the Giza pyramids, the Sphinx, Karnak, Luxor, Abu Simbel, and the Valley of the Kings. They invented writing, later called hieroglyphs by the Greeks, and wrote on papyrus using black or red ink. Important religious texts included the Pyramid Texts and the Book of the Dead. Music was used in education, ceremonies, the army, prayer, and burials. Egyptian ornaments also used natural motifs such as papyrus, palm trees, and lotus flowers, as well as precious stones. (Source: SIS.)",
      ],
    },
     {
      heading: "Sources",
      paragraphs: [
        "National Museum of Egyptian Civilization (NMEC), “Historical Timeline”: https://nmec.gov.eg/ar/historical-timeline/ Egyptian State Information Service (SIS), “Pharaonic Era”: https://sis.gov.eg/en/egypt/history/egypts-history/pharaonic-era/",
      ],
    },

  ],

  arabic: [
    {
      heading: "مقدمة",
      paragraphs: [
        "تقدم هذه الصفحة لمحة عن تاريخ مصر القديمة، من عصر ما قبل الأسرات إلى نهاية الحكم الفرعوني. وتوضح المصادر تطور المجتمعات في وادي النيل، وتوحيد مصر، وازدهار الحضارة، وما حققه المصريون القدماء في العمارة والكتابة والموسيقى والزخرفة. وتؤرخ الهيئة العامة للاستعلامات العصر الفرعوني من نحو 3000 ق.م. حتى فتح الإسكندر الأكبر لمصر عام 323 ق.م. (المصدر: SIS).",
      ],
    },
    {
      heading: "عصر ما قبل الأسرات",
      paragraphs: [
        "امتد هذا العصر من 5500 إلى 3100 ق.م.، وسبق ظهور الكتابة في مصر في نهاية العصر الحجري الحديث. وشملت الثقافات المهمة في وادي النيل بوتو، والمعادي، ومريمدة، والبداري، والفيوم، ونقادة الأولى والثانية والثالثة. ويستدل الباحثون على هذه الفترة من خلال الجبانات والتماثيل والصلايات والأدوات الحجرية. (المصدر: NMEC).",
      ],
    },
    {
      heading: "توحيد مصر",
      paragraphs: [
        "امتد عصر بداية الأسرات من 3100 إلى 2686 ق.م.، وشمل الأسرتين الأولى والثانية، وبدأ فيه التاريخ المسجل. وانتهت محاولات توحيد شمال مصر وجنوبها بقيام الأسرة الأولى، وأصبحت منف عاصمة الدولة الموحدة. ومن أشهر الملوك نارمر وخع سخموي، ومن المواقع الأثرية المهمة حلوان وسقارة وأطفيح وأبيدوس. (المصدر: NMEC).  وتذكر SIS أن مينا وحّد شمال مصر وجنوبها عام 3200 ق.م.، وأسس أول أسرة حاكمة، كما أسس منف قرب الدلتا لضمان وحدة البلاد. ويختلف هذا التاريخ عن تاريخ بداية الأسرات لدى NMEC، ويحتاج الاختلاف إلى التحقق. (المصدران: SIS وNMEC).",
      ],
    },
    {
      heading: "الدولة القديمة",
      paragraphs: [
        "شملت الدولة القديمة الأسرات من الثالثة إلى السادسة، وشهدت الاستقرار والأمن والسلام والتقدم الاقتصادي والثقافي والفني. وبنى زوسر أقدم هرم معروف في سقارة، وشُيدت أهرامات الجيزة لخوفو وخفرع ومنقرع. (المصدر: SIS).",
      ],
    },
    {
      heading: " عصر الانتقال الأول",
      paragraphs: [
        "بدأ هذا العصر عام 2200 ق.م. وفقًا لـSIS، وتذكر الهيئة أن منتوحتب الثاني أعاد توحيد مصر. (المصدر: SIS).",
      ],
    },
     {
      heading: "الدولة الوسطى",
      paragraphs: [
        "شملت الدولة الوسطى الأسرتين الحادية عشرة والثانية عشرة. وأسهم أمنمحات الأول بدور مهم في نهضتها نحو عام 2000 ق.م. (المصدر: SIS).",
      ],
    },
    {
      heading: "عصر الانتقال الثاني",
      paragraphs: [
        "بدأ هذا العصر عام 1725 ق.م. عندما هاجم الهكسوس مصر. وتمكن أمراء طيبة بقيادة أحمس الأول من طردهم، ثم أنشأ أحمس جيشًا مجهزًا جيدًا. (المصدر: SIS).",
      ],
    },
    {
      heading: "الدولة الحديثة",
      paragraphs: [
        "تسمي SIS الأسرات الثامنة عشرة إلى العشرين «المملكة الحديثة» في نصها الإنجليزي، ويُستخدم هنا المصطلح الشائع «الدولة الحديثة». ووقّع رمسيس الثاني أول معاهدة سلام في التاريخ مع الحيثيين. (المصدر: SIS).",
      ],
    },
    {
      heading: "العصر المتأخر والعصر البطلمي",
      paragraphs: [
        "شمل العصر المتأخر الأسرات من الحادية والعشرين إلى الثلاثين. واحتل الآشوريون والفرس مصر، وانتهى الحكم الفرعوني خلال الأسرة الثلاثين عندما فتح الإسكندر الأكبر مصر. ولا تتضمن الحقائق المقدمة تفاصيل عن العصر البطلمي؛ لذلك يحتاج هذا الجزء إلى التحقق قبل إضافة معلومات. (المصدر: SIS).",
      ],
    },
    {
      heading: "إنجازات المصريين القدماء",
      paragraphs: [
        "بنى المصريون القدماء 97 هرمًا بوصفها مقابر ملكية. ومن آثارهم الشهيرة أهرامات الجيزة وأبو الهول والكرنك والأقصر وأبو سمبل ووادي الملوك. واخترعوا الكتابة التي سماها اليونانيون لاحقًا الهيروغليفية، وكتبوا على البردي بالحبر الأسود أو الأحمر. وشملت نصوصهم الدينية المهمة نصوص الأهرام وكتاب الموتى. واستخدموا الموسيقى في التعليم والاحتفالات والجيش والصلاة والدفن. كما استوحوا الزخارف من البردي والنخيل وزهور اللوتس، واستخدموا الأحجار الكريمة. (المصدر: SIS).",
      ],
    },
     {
      heading: "المصادر",
      paragraphs: [
        "National Museum of Egyptian Civilization (NMEC), “Historical Timeline”: https://nmec.gov.eg/ar/historical-timeline/ Egyptian State Information Service (SIS), “Pharaonic Era”: https://sis.gov.eg/en/egypt/history/egypts-history/pharaonic-era/",
      ],
    },

  ],

};




function showAncientEgyptContent(version) {
  const sections = contentVersions[version];

  if (!sections) {
    throw new Error(`Unknown Ancient Egypt content version: ${version}`);
  }

  currentVersion = version;
  document.documentElement.lang = version === "arabic" ? "ar" : "en";
  document.documentElement.dir = version === "arabic" ? "rtl" : "ltr";
  contentElement.lang = version === "arabic" ? "ar" : "en";
  contentElement.dir = version === "arabic" ? "rtl" : "ltr";
  pageTitle.textContent = version === "arabic" ? "مصر القديمة" : "Ancient Egypt";
  document.title = version === "arabic" ? "مصر القديمة | تراث مصر الرقمي" : "Ancient Egypt | Masr Digital Heritage";
  versionToggle.textContent = version === "arabic" ? "English" : "العربية";
  versionToggle.setAttribute(
    "aria-label",
    version === "arabic" ? "Switch to English" : "Switch to Arabic",
  );

  contentElement.replaceChildren(
    ...sections.map(({ heading, paragraphs }) => {
      const section = document.createElement("section");
      section.className = "ancient-egypt-section";

      const title = document.createElement("h2");
      title.textContent = heading;
      title.dir = "auto";
      section.append(title);

      for (const text of paragraphs) {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        paragraph.dir = "auto";
        section.append(paragraph);
      }

      return section;
    }),
  );
}

window.showAncientEgyptContent = showAncientEgyptContent;
versionToggle.addEventListener("click", () => {
  showAncientEgyptContent(currentVersion === "english" ? "arabic" : "english");
});
showAncientEgyptContent("english");