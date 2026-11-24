const versionToggle = document.getElementById("content-version-toggle");
const title = document.querySelector(".titleh1");
const content = document.querySelector(".Homepage-text");
const homeLink = document.querySelector('a[href="../index.html"]');
let currentVersion = "english";

const contentVersions = {
  english: {
    pageTitle: "Modern Egypt: October 6, 1973 | Masr Digital Heritage",
    title: "Modern Egypt: October 6, 1973",
    home: "Back to Home",
    sections: [
      { heading: "Modern Egypt", paragraphs: ["Modern Egypt begins in 1952, when the Free Officers Movement ended the monarchy and established a republic. But the story that defines modern Egypt — and the one this page is built around — is the October War of 1973: the war that turned a defeat into a recovery, and a recovery into a peace settlement."] },
      { heading: "The road to October", paragraphs: ["The October War did not come out of nowhere. It was the direct result of the Six-Day War of June 1967, when Israel occupied the Sinai Peninsula and the Suez Canal, along with the Golan Heights, the West Bank and Jerusalem. For six years, Israel fortified its positions on the east bank of the canal in what became known as the Bar Lev Line.","Egypt's response to that defeat was the War of Attrition, which began in 1968 and continued until 1970. It was not a war fought to win territory back immediately; it was a war fought to keep the Israeli army tied down, to test its defences, and to prepare the ground for something bigger. When Anwar el-Sadat took power in 1970, he inherited both the ceasefire and the unfinished business of Sinai. Israel's rejection of the Rogers Initiative left war as the only option to recover Sinai and the canal, and Sadat began preparing the state for a war of liberation."] },
      { heading: "The plan", paragraphs: ["The October War was a surprise attack by design. Egyptian and Syrian intelligence services worked together on a plan to confuse the enemy about when and where the attack would come. The result was that Israel, despite its intelligence advantage, was caught off guard on 6 October 1973.","At exactly 14:00 hours, 222 Egyptian fighter aircraft crossed the Suez Canal undetected. Their targets were radar stations, air defence batteries, fortified points on the Bar Lev Line, oil refineries and ammunition depots. At the same time, Egyptian artillery opened up across the canal, firing 10,500 rockets in the first 60 seconds — an average of 175 rockets per second."] },
      { heading: "The crossing", paragraphs: ["The ground assault followed immediately. Around 1,000 rubber boats carried 8,000 Egyptian soldiers across the canal, who then climbed the Bar Lev Line and stormed into Israeli defences. The Egyptian Engineer Corps built the first bridge six hours after the war began, and eight hours later had cut a path through the Bar Lev Line, set up twelve more bridges, and put thirty ferries into operation.","That is the scale of the operation, and it is why SIS treats it as the decisive moment of the war. In under a day, Egypt had crossed a canal that Israel had spent six years fortifying, and had established a foothold on the east bank."] },
      { heading: "The war's course", paragraphs: ["The initial success of the air strike made it possible for Egyptian soldiers to penetrate the Bar Lev Line within six hours, inflicting heavy losses on Israeli troops. But the war did not stay one-sided. On 10 October, the United States launched an air bridge of military equipment and supplies to Israel, and the balance began to shift.","SIS is blunt about this: without that American air bridge, the Israeli army would have been heavily defeated. That is an Egyptian official source acknowledging, plainly, that the war's outcome was shaped by external intervention — which is a more honest framing than pretending the war was won or lost on Egyptian terms alone."] },
      { heading: "The Aftermath", paragraphs: ["On 22 October 1973, the UN Security Council adopted Resolution 338, calling on all parties to stop fighting, cease all firing, terminate all military activity, and begin negotiations for a just and durable peace in the Middle East.","The war ended without a clear military victory for either side, but it produced a political result that mattered more. Egypt regained full sovereignty over the Suez Canal and recovered part of Sinai, and the war paved the way for the Camp David agreement in September 1978, which eventually led to the return of the entire Sinai Peninsula."] },
      { heading: "What the war means", paragraphs: ["SIS frames the October War's significance in five points: that Egyptians could mount a well-planned, properly prepared military attack based on a brave decision; that the myth of the invincible Israeli army could be destroyed; that the policy of imposing a status quo was invalid; that Arab national security was threatened, which brought Arabs together; and that Sinai should be reconstructed and turned into a strategic region shielding Egypt from the east.","That is Egypt's own account of what the war proved, and it is the right frame for this page: not 'Egypt won the war,' but 'Egypt changed the terms of the conflict.' The war did not return all of Sinai immediately, but it made the return possible, and it restored a confidence that had been lost in 1967."] }
    ],
  },
  arabic: {
    pageTitle: "مصر الحديثة: 6 أكتوبر 1973 | تراث مصر الرقمي",
    title: "مصر الحديثة: 6 أكتوبر 1973",
    home: "العودة إلى الرئيسية",
    sections: [
      { heading: "مصر الحديثة", paragraphs: ["تبدأ مصر الحديثة عام 1952، حين أنهت حركة الضباط الأحرار الملكية وأسست جمهورية. لكن القصة التي تحدد مصر الحديثة — وهي القصة التي بُنيت هذه الصفحة حولها — هي حرب أكتوبر 1973: الحرب التي حوّلت هزيمة إلى تعافٍ، وتعافيًا إلى تسوية سلام."] },
      { heading: "الطريق إلى أكتوبر", paragraphs: ["لم تأت حرب أكتوبر من فراغ. كانت النتيجة المباشرة لحرب يونيو 1967، حين احتلت إسرائيل شبه جزيرة سيناء وقناة السويس، إلى جانب هضبة الجولان والضفة الغربية والقدس. ولست سنوات، عززت إسرائيل مواقعها على الضفة الشرقية للقناة فيما عُرف لاحقًا بخط بارليف.","كانت استجابة مصر لتلك الهزيمة هي حرب الاستنزاف، التي بدأت عام 1968 واستمرت حتى 1970. لم تكن حربًا لاستعادة الأراضي فورًا، بل حربًا لإبقاء الجيش الإسرائيلي مشغولًا، واختبار دفاعاته، وتهيئة الأرض لشيء أكبر. وحين تولى أنور السادات السلطة عام 1970، ورث وقف إطلاق النار والعمل غير المنجز المتمثل في سيناء. وترك رفض إسرائيل لمبادرة روجرز الحرب خيارًا وحيدًا لاستعادة سيناء والقناة، وبدأ السادات إعداد الدولة لحرب تحرير."] },
      { heading: "الخطة", paragraphs: ["كانت حرب أكتوبر هجومًا مفاجئًا بالتصميم. عملت أجهزة الاستخبارات المصرية والسورية معًا على خطة لتضليل العدو بشأن توقيت الهجوم ومكانه. وكانت النتيجة أن إسرائيل، رغم تفوقها الاستخباراتي، أُخذت على حين غرة في 6 أكتوبر 1973.","في تمام الساعة 14:00، عبرت 222 طائرة مقاتلة مصرية قناة السويس دون أن تُكتشف. وكانت أهدافها محطات الرادار، وبطاريات الدفاع الجوي، والنقاط المحصنة على خط بارليف، ومصافي النفط، ومستودعات الذخيرة. وفي الوقت نفسه، فتحت المدفعية المصرية النار عبر القناة، وأطلقت 10,500 صاروخ في أول 60 ثانية — بمعدل 175 صاروخًا في الثانية."] },
      { heading: "العبور", paragraphs: ["تبع الهجوم البري فورًا. حمل نحو 1,000 قارب مطاطي 8,000 جندي مصري عبر القناة، الذين تسلقوا بعد ذلك خط بارليف واقتحموا الدفاعات الإسرائيلية. وبنى سلاح الهندسة المصري أول جسر بعد ست ساعات من بدء الحرب، وبعد ثماني ساعات كان قد قطع طريقًا عبر خط بارليف، وأقام اثني عشر جسرًا إضافيًا، وشغّل ثلاثين عبّارة.","هذا هو حجم العملية، ولهذا تعاملها وزارة الإعلام بوصفها اللحظة الحاسمة في الحرب. في أقل من يوم، عبرت مصر قناة أنفقت إسرائيل ست سنوات في تحصينها، وأسست رأس جسر على الضفة الشرقية."] },
      { heading: "مسار الحرب", paragraphs: ["جعل النجاح الأولي للضربة الجوية من الممكن لجنود مصر اختراق خط بارليف في غضون ست ساعات، مما ألحق خسائر فادحة بالقوات الإسرائيلية. لكن الحرب لم تبقَ أحادية الجانب. في 10 أكتوبر، أطلقت الولايات المتحدة جسرًا جويًا من المعدات والتموين العسكري إلى إسرائيل، وبدأ الميزان يتغير.","وتكون وزارة الإعلام صريحة في هذا: بدون ذلك الجسر الجوي الأمريكي، لكان الجيش الإسرائيلي قد هُزم هزيمة فادحة. وهذا مصدر مصري رسمي يعترف بوضوح بأن نتيجة الحرب تشكلت بتدخل خارجي — وهو تأطير أكثر صدقًا من التظاهر بأن الحرب كُسبت أو خُسرت بشروط مصرية وحدها."] },
      { heading: "القرار ", paragraphs: ["في 22 أكتوبر 1973، تبنى مجلس الأمن التابع للأمم المتحدة القرار 338، داعيًا جميع الأطراف إلى وقف القتال وإنهاء إطلاق النار وإنهاء كل النشاط العسكري والبدء في مفاوضات لإحلال سلام عادل ودائم في الشرق الأوسط.","انتهت الحرب دون نصر عسكري واضح لأي من الطرفين، لكنها أنتجت نتيجة سياسية كانت أهم. استعادت مصر السيادة الكاملة على قناة السويس واستعادت جزءًا من سيناء، ومهدت الحرب الطريق لاتفاق كامب ديفيد في سبتمبر 1978، الذي أدى في النهاية إلى عودة شبه جزيرة سيناء بالكامل."] },
      { heading: "ماذا تعني الحرب", paragraphs: ["تؤطر وزارة الإعلام دلالة حرب أكتوبر في خمس نقاط: أن المصريين يستطيعون شن هجوم عسكري مخطط له جيدًا ومعدّ له بشكل صحيح استنادًا إلى قرار شجاع؛ وأن أسطورة الجيش الإسرائيلي الذي لا يُقهر يمكن تدميرها؛ وأن سياسة فرض الوضع الراهن كانت باطلة؛ وأن الأمن القومي العربي كان مهددًا، وهو ما جمع العرب؛ وأنه ينبغي إعادة إعمار سيناء وتحويلها إلى منطقة استراتيجية تحمي مصر من الشرق.","هذا هو رواية مصر نفسها عما أثبتته الحرب، وهو الإطار الصحيح لهذه الصفحة: ليس «مصر كسبت الحرب»، بل «مصر غيّرت شروط الصراع». الحرب لم تُعد سيناء بالكامل فورًا، لكنها جعلت العودة ممكنة، وأعادت ثقة فُقدت عام 1967."] },
    ],
  },
};

function renderModernEgyptSections(sections) {
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

function showModernEgyptContent(version) {
  const contentVersion = contentVersions[version];
  if (!contentVersion) {
    throw new Error(`Unknown Modern Egypt content version: ${version}`);
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
  renderModernEgyptSections(contentVersion.sections);
}

document.addEventListener("site-language-change", ({ detail }) => {
  showModernEgyptContent(detail.language);
});
showModernEgyptContent(document.documentElement.lang === "ar" ? "arabic" : "english");
