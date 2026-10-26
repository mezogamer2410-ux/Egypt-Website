const versionToggle = document.getElementById("content-version-toggle");
const title = document.querySelector(".titleh1");
const content = document.querySelector(".Homepage-text");
const homeLink = document.querySelector('a[href="../index.html"]');
let currentVersion = "english";

const contentVersions = {
  english: {
    pageTitle: "Future of Egypt | Masr Digital Heritage",
    title: "Future of Egypt",
    content: "Modern Egypt: The Future of Egypt — The future of Egypt is written in a national strategy, a green financing platform, a new capital city, and a museum that holds the treasures of Tutankhamun. Together they show a country investing in three directions at once: its people, its resources, and its cultural identity. What Egypt Vision 2030 Is: Egypt Vision 2030 is the country’s national sustainable development strategy. It is built on the principle of comprehensive sustainable development and balanced regional development, and it reflects the three dimensions of sustainable development: the economic, social, and environmental dimensions. The strategy is organised around six strategic goals and supported by seven enablers that accelerate progress toward those goals. The Four Principles: The updated vision rests on four guiding principles: the human being is the centre of development, achieving justice and accessibility, enhancing flexibility and adaptability, and achieving sustainability. Placing the human being at the centre is the most important of the four. It means that a road, a school, or a desalination plant is judged by whether it improves a person’s life, not only by whether it is completed. Water, Food and Energy: NWFE: Egypt launched the NWFE programme in July 2022 as its country platform for the nexus of water, food, and energy. The platform mobilises climate finance and private investment to support Egypt’s green transition. NWFE contains nine priority projects with estimated investments of about 14.7 billion US dollars. The energy pillar includes replacing thermal power plants with renewable energy, the food pillar includes five adaptation projects, and the water pillar includes three projects on desalination and irrigation. Egypt also moved its renewable energy target forward: 42 percent of the energy mix by 2030, instead of 2035. The New Administrative Capital: East of Cairo, Egypt has built a new administrative capital with government headquarters and a dedicated culture and arts district containing conference venues, theatres, and exhibition facilities, alongside a growing number of hotels. Culture as Development: the Grand Egyptian Museum: The Grand Egyptian Museum opened to the public on 1 November 2025. The project cost about one billion US dollars, stands near the Pyramids of Giza, and is described as the world’s largest museum dedicated to a single civilization. It displays nearly 50,000 artefacts, including the complete collection of Tutankhamun’s treasures, shown together for the first time since the tomb was discovered in 1922. Why It Matters to Young Egyptians: For a student, the future of Egypt is not an abstract slogan. It is the museum that now holds the country’s heritage in one place, the renewables that will power the grid, and the principle that development must serve people first.",
    home: "Back to Home",
  },
  arabic: {
    pageTitle: "مستقبل مصر | تراث مصر الرقمي",
    title: "مستقبل مصر",
    content: "مصر الحديثة: مستقبل مصر — مستقبل مصر مكتوب في استراتيجية وطنية، ومنصة تمويل أخضر، وعاصمة إدارية جديدة، ومتحف يحفظ كنوز توت عنخ آمون. وكلها معًا تكشف بلدًا يستثمر في ثلاثة اتجاهات في وقت واحد: الإنسان، والموارد، والهوية الثقافية. ما هي رؤية مصر 2030؟ رؤية مصر 2030 هي استراتيجية التنمية المستدامة الوطنية. وتقوم على مبدأ التنمية المستدامة الشاملة والتنمية الإقليمية المتوازنة، وتعكس الأبعاد الثلاثة للتنمية المستدامة: البعد الاقتصادي، والبعد الاجتماعي، والبعد البيئي. وتنتظم الاستراتيجية حول ستة أهداف استراتيجية، تدعمها سبعة مُمكِّنات تعمل على تسريع الوصول إلى تلك الأهداف. المبادئ الأربعة: تقوم النسخة المحدثة من الرؤية على أربعة مبادئ حاكمة: الإنسان محور التنمية، وتحقيق العدالة وسهولة الوصول، وتعزيز المرونة والقدرة على التكيف، وتحقيق الاستدامة. ووضع الإنسان في المركز هو أهم هذه المبادئ الأربعة. فمعناه أن الطريق أو المدرسة أو محطة التحلية تُقاس بمدى تحسينها لحياة الإنسان، لا بمدى إنجازها فقط. المياه والغذاء والطاقة: برنامج «نُوَفِّي»: أطلقت مصر برنامج «نُوَفِّي» في يوليو 2022 كمنصة وطنية تربط بين المياه والغذاء والطاقة. وتعمل المنصة على تعبئة التمويل المناخي والاستثمار الخاص لدعم التحول الأخضر في مصر. ويضم البرنامج تسعة مشاريع ذات أولوية باستثمارات تقديرية تبلغ نحو 14.7 مليار دولار. ويشمل محور الطاقة استبدال محطات الكهرباء الحرارية بالطاقة المتجددة، ويضم محور الغذاء خمسة مشاريع للتكيف، ومحور المياه ثلاثة مشاريع للتحلية والري. كما قدّمت مصر هدفها للطاقة المتجددة إلى 42 في المئة من مزيج الطاقة بحلول عام 2030، بدلًا من 2035. العاصمة الإدارية الجديدة: شرق القاهرة، بنت مصر عاصمة إدارية جديدة تضم مقرات حكومية وحيًّا للثقافة والفنون يضم قاعات مؤتمرات ومسارح ومرافق للمعارض، إلى جانب عدد متزايد من الفنادق. الثقافة كتنمية: المتحف المصري الكبير: افتتح المتحف المصري الكبير أبوابه للجمهور في 1 نوفمبر 2025. وبلغت تكلفة المشروع نحو مليار دولار، ويقع قرب أهرامات الجيزة، ويوصف بأنه أكبر متحف في العالم مخصص لحضارة واحدة. ويعرض المتحف نحو 50,000 قطعة أثرية، من بينها مجموعة كنوز توت عنخ آمون كاملة، تُعرض معًا للمرة الأولى منذ اكتشاف المقبرة عام 1922. لماذا يهم مستقبل مصر الشباب؟ بالنسبة للطالب، مستقبل مصر ليس شعارًا مجردًا. فهو المتحف الذي يجمع تراث البلاد في مكان واحد، والطاقة المتجددة التي ستشغّل الشبكة، والمبدأ الذي يقول إن التنمية يجب أن تخدم الإنسان أولًا.",
    home: "العودة إلى الرئيسية",
  },
};

function showContentVersion(version) {
  const contentVersion = contentVersions[version];
  if (!contentVersion) {
    throw new Error(`Unknown Future of Egypt content version: ${version}`);
  }

  currentVersion = version;
  document.documentElement.lang = version === "arabic" ? "ar" : "en";
  document.documentElement.dir = version === "arabic" ? "rtl" : "ltr";
  document.title = contentVersion.pageTitle;
  title.textContent = contentVersion.title;
  content.textContent = contentVersion.content;
  homeLink.textContent = contentVersion.home;
  versionToggle.textContent = version === "arabic" ? "English" : "العربية";
  versionToggle.setAttribute("aria-label", `Switch to ${version === "arabic" ? "English" : "Arabic"}`);
}

versionToggle.addEventListener("click", () => {
  showContentVersion(currentVersion === "english" ? "arabic" : "english");
});

showContentVersion("english");
