const languageButton = document.getElementById("content-version-toggle");
const languageStorageKey = "masr-digital-heritage-language";
const supportedLanguages = ["english", "arabic"];

function applySiteLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    throw new Error(`Unknown site language: ${language}`);
  }

  const isArabic = language === "arabic";
  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";
  languageButton.textContent = isArabic ? "English" : "العربية";
  languageButton.setAttribute(
    "aria-label",
    isArabic ? "Switch to English" : "Switch to Arabic",
  );

  for (const element of document.querySelectorAll("[data-en][data-ar]")) {
    element.textContent = isArabic ? element.dataset.ar : element.dataset.en;
  }

  for (const element of document.querySelectorAll("[data-title-en][data-title-ar]")) {
    element.title = isArabic ? element.dataset.titleAr : element.dataset.titleEn;
  }

  for (const element of document.querySelectorAll("[data-alt-en][data-alt-ar]")) {
    element.alt = isArabic ? element.dataset.altAr : element.dataset.altEn;
  }

  document.dispatchEvent(
    new CustomEvent("site-language-change", { detail: { language } }),
  );
}

languageButton.addEventListener("click", () => {
  const language = document.documentElement.lang === "ar" ? "english" : "arabic";
  localStorage.setItem(languageStorageKey, language);
  applySiteLanguage(language);
});

const savedLanguage = localStorage.getItem(languageStorageKey);
applySiteLanguage(supportedLanguages.includes(savedLanguage) ? savedLanguage : "english");
