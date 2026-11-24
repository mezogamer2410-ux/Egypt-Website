const versionToggle = document.getElementById("content-version-toggle");
const title = document.querySelector(".titleh1");
const content = document.querySelector(".Homepage-text");
const homeLink = document.querySelector('a[href="../index.html"]');
let currentVersion = "english";

const contentVersions = {
  english: {
    pageTitle: "Future of Egypt | Masr Digital Heritage",
    title: "Future of Egypt",
    home: "Back to Home",
    sections: [
      { heading: "Egypt's Future Plans", paragraphs: ["Egypt's future plans are not one document but a stack of strategies, with Vision 2030 as the umbrella. Launched in February 2016 and updated in 2019, Egypt Vision 2030 is the state's long-term strategic plan to achieve sustainable development across all fields, and to localise those goals inside every Egyptian government agency. It is the framework that the other plans — climate, population, digital — hang from."] },
      { heading: "The three dimensions", paragraphs: ["Vision 2030 is built on two principles: inclusive sustainable development and balanced regional development. It reflects the three dimensions of sustainable development — economic, social and environmental — and the whole strategy is an attempt to hold those three together rather than treat them as separate goals.","That matters because it changes what 'development' means. A road, a factory, or a power plant is not automatically development if it damages the environment or bypasses the people who live nearby. Vision 2030's framing is that growth only counts if it is inclusive — reaching people across regions and income levels — and sustainable — not using up resources that future generations will need."] },
      { heading: "The structure: principles, goals, enablers", paragraphs: ["The updated Vision 2030 identifies four guiding principles that direct the implementation of six strategic goals, while using seven enablers as tools to accelerate sustainable development. That is the official architecture: four principles, six goals, seven enablers.","The enablers are worth understanding, because they are the practical levers. They include things like governance, transparency, the rule of law, and the fight against corruption — which SIS describes as essential for efficient state institutions, a functioning private sector, and civil society. In other words, the plan treats good governance not as a separate virtue but as the mechanism that makes the other goals achievable."] },
      { heading: "Economic plans", paragraphs: ["On the economic side, the target is ambitious: Egypt is aiming for 7% growth by 2030, with a focus on high-productivity, export-oriented sectors and advanced infrastructure to strengthen competitiveness and private sector participation. The National Narrative for Economic Development frames future transformation as driven by investments in manufacturing, technology and tourism — sectors that create jobs and raise productivity.","That is a specific bet: not growth for its own sake, but growth concentrated in sectors that can employ people and compete internationally. Technology is meant to be embedded across all economic activities, not confined to a tech sector, which is the same logic that runs through the Digital Egypt page — digital tools as a multiplier on everything else rather than an industry unto itself."] },
      { heading: "Climate and the environment", paragraphs: ["Egypt launched its National Climate Change Strategy 2050 at COP26 in Glasgow, and it is the environmental counterpart to Vision 2030. The strategy is built around the idea that development and environmental protection are not in conflict but have to be pursued together, preserving resources for future generations.","The renewable energy push is the most visible part of this. Egypt is positioning itself as a potential major producer of renewable energy through solar projects like Benban, wind farms in the Gulf of Suez, and green hydrogen. That is not just an environmental goal; it is an economic one, aimed at turning Egypt's geography — sun, wind, and a strategic location — into an export industry."] },
      { heading: "Population and people", paragraphs: ["Egypt also has a National Population Strategy, which sits alongside Vision 2030 as a separate but connected plan. The logic is straightforward: a country cannot plan its economy without planning for the people who will live in it, and population growth is one of the defining constraints on Egyptian development."] },
      { heading: "Why the Future Matters to Young Egyptians", paragraphs: ["These plans will matter significantly to the future of our beloved country, and our young pioneers, who are looking to benefit the community and the world through science and ambitions for development."] },
    ],
  },
  arabic: {
    pageTitle: "مستقبل مصر | تراث مصر الرقمي",
    title: "مستقبل مصر",
    home: "العودة إلى الرئيسية",
    sections: [
      { heading: "خطط مصر المستقبلية", paragraphs: ["خطط مصر المستقبلية ليست وثيقة واحدة بل مجموعة من الاستراتيجيات، مع رؤية مصر 2030 كمظلة لها. أُطلقت رؤية مصر 2030 في فبراير 2016 وتم تحديثها في 2019، وهي الخطة الاستراتيجية طويلة المدى للدولة لتحقيق التنمية المستدامة في جميع المجالات، وترسيخ تلك الأهداف داخل كل جهة حكومية مصرية. وهي الإطار الذي تتدلى منه الخطط الأخرى — المناخ، والسكان، والرقمنة."] },
      { heading: "الأبعاد الثلاثة", paragraphs: ["تقوم رؤية مصر 2030 على مبدأين: التنمية المستدامة الشاملة، والتنمية الإقليمية المتوازنة. وتعكس الأبعاد الثلاثة للتنمية المستدامة — الاقتصادي والاجتماعي والبيئي — والاستراتيجية كلها محاولة للإمساك بالثلاثة معًا بدلًا من معاملتها كأهداف منفصلة.","وهذا مهم لأنه يغير ما تعنيه «التنمية». طريق أو مصنع أو محطة كهرباء ليست تنمية تلقائيًا إذا أضرت بالبيئة أو تجاوزت الناس الذين يعيشون قربها. تأطير رؤية 2030 هو أن النمو لا يُحتسب إلا إذا كان شاملًا — يصل إلى الناس عبر المناطق ومستويات الدخل — ومستدامًا — لا يستهلك موارد ستحتاجها الأجيال القادمة."] },
      { heading: "الهيكل: مبادئ وأهداف وممكّنات", paragraphs: ["تحدد رؤية 2030 المحدثة أربعة مبادئ توجيهية تمثل الركائز الرئيسية التي توجه تنفيذ ستة أهداف استراتيجية، مع استخدام سبعة ممكّنات كأدوات لتسريع تحقيق التنمية المستدامة في مصر. هذه هي البنية الرسمية: أربعة مبادئ، وستة أهداف، وسبعة ممكّنات.","الممكّنات تستحق الفهم، لأنها هي الروافع العملية. وتشمل أشياء مثل الحوكمة، والشفافية، وسيادة القانون، ومكافحة الفساد — التي تصفها وزارة الإعلام بأنها ضرورية لكفاءة مؤسسات الدولة، وقطاع خاص عامل، ومجتمع مدني. بمعنى آخر، تعامل الخطة الحوكمة الجيدة لا كفضيلة منفصلة بل كآلية تجعل الأهداف الأخرى قابلة للتحقيق."] },
      { heading: "الخطط الاقتصادية", paragraphs: ["على الجانب الاقتصادي، الهدف طموح: تستهدف مصر نموًا بنسبة 7% بحلول 2030، مع التركيز على قطاعات عالية الإنتاجية موجهة للتصدير وبنية تحتية متقدمة لتعزيز التنافسية ومشاركة القطاع الخاص. ويؤطر السرد الوطني للتنمية الاقتصادية التحول المستقبلي بأنه مدفوع باستثمارات في الصناعة والتكنولوجيا والسياحة — قطاعات تخلق وظائف وترفع الإنتاجية.","هذا رهان محدد: ليس نموًا من أجل النمو، بل نموًا مركزًا في قطاعات تستطيع توظيف الناس والمنافسة دوليًا. والتكنولوجيا مقصود أن تكون راسخة في كل الأنشطة الاقتصادية، لا محصورة في قطاع تقني، وهي نفس المنطق الذي يمر عبر صفحة مصر الرقمية — الأدوات الرقمية كمضاعف لكل شيء آخر لا كصناعة بذاتها."] },
      { heading: "المناخ والبيئة", paragraphs: ["أطلقت مصر استراتيجيتها الوطنية لتغير المناخ 2050 في مؤتمر الأطراف COP26 في غلاسكو، وهي الوجهة البيئية المقابلة لرؤية 2030. تقوم الاستراتيجية على فكرة أن التنمية وحماية البيئة ليستا في تعارض بل يجب السعي إليهما معًا، مع الحفاظ على الموارد للأجيال القادمة.","دفع الطاقة المتجددة هو الجزء الأكثر وضوحًا من هذا. تضع مصر نفسها كمنتج محتمل رئيسي للطاقة المتجددة عبر مشروعات الطاقة الشمسية مثل بنبان، ومزارع الرياح في خليج السويس، والهيدروجين الأخضر. وهذا ليس هدفًا بيئيًا فقط؛ إنه هدف اقتصادي، يستهدف تحويل جغرافيا مصر — الشمس والرياح والموقع الاستراتيجي — إلى صناعة تصدير."] },
      { heading: "السكان والناس", paragraphs: ["لدى مصر أيضًا استراتيجية وطنية للسكان، تقع إلى جانب رؤية 2030 كخطة منفصلة لكنها مترابطة. المنطق مباشر: لا تستطيع دولة التخطيط لاقتصادها دون التخطيط للناس الذين سيعيشون فيه، ونمو السكان أحد القيود المحددة للتنمية المصرية.","التأطير المتمحور حول الإنسان صريح. وصف رئيس الوزراء رؤية 2030 بأنها تضع «الإنسان في قلب التنمية»، وهي الطريقة الرسمية للقول إن الخطة تُقاس بمدى تحسينها لحياة الناس، لا بمؤشرات اقتصادية فقط."] },
      { heading: "التأطير الصادق", paragraphs: ["خطط مصر المستقبلية مزيج من أهداف جارية بالفعل وطموحات لا تزال أمامنا. رؤية 2030 هي المظلة، واستراتيجية المناخ 2050 هي الطبقة البيئية، واستراتيجية السكان هي الطبقة الديموغرافية، والسرد الاقتصادي هو طبقة النمو. ولا شيء منها منتهٍ، وتصف الحكومة نفسها رؤية 2030 بأنها شيء تحدّثه باستمرار استجابة للتغيرات السياسية والاقتصادية والاجتماعية والبيئية.","هذه هي الطريقة الصحيحة لعرض هذه الصفحة: ليس كقائمة وعود، بل كخريطة لما تقول مصر إنها تحاول بناءه، مع التحفظ بأن الخطة ليست هي النتيجة."] },
      { heading: "لماذا يهم المستقبل للشباب المصري", paragraphs: ["ستكون لهذه الخطط أهمية كبيرة لمستقبل بلدنا الحبيب، ولروادنا الشباب الذين يسعون إلى إفادة المجتمع والعالم بالعلم وطموحات التنمية."] },
    ],
  },
};

function renderFutureEgyptSections(sections) {
  content.replaceChildren(
    ...sections.map(({ heading, paragraphs }) => {
      const section = document.createElement("section");
      section.className = "article-section";

      const sectionTitle = document.createElement("h2");
      sectionTitle.textContent = heading;
      sectionTitle.dir = "auto";
      section.append(sectionTitle);

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

function showFutureEgyptContent(version) {
  const contentVersion = contentVersions[version];
  if (!contentVersion) {
    throw new Error(`Unknown Future of Egypt content version: ${version}`);
  }

  currentVersion = version;
  document.documentElement.lang = version === "arabic" ? "ar" : "en";
  document.documentElement.dir = version === "arabic" ? "rtl" : "ltr";
  document.title = contentVersion.pageTitle;
  title.textContent = contentVersion.title;
  homeLink.textContent = contentVersion.home;
  versionToggle.textContent = version === "arabic" ? "English" : "العربية";
  versionToggle.setAttribute(
    "aria-label",
    version === "arabic" ? "Switch to English" : "Switch to Arabic",
  );
  renderFutureEgyptSections(contentVersion.sections);
}

document.addEventListener("site-language-change", ({ detail }) => {
  showFutureEgyptContent(detail.language);
});
showFutureEgyptContent(document.documentElement.lang === "ar" ? "arabic" : "english");
