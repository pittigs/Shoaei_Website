/**
 * Translation Dictionary for Law Office Shirin Shoaei
 * Contains all UI strings, alerts, and legal policies in English and Farsi.
 */

const translations = {
  en: {
    // Navigation
    navStart: "Home",
    navServices: "Practice Areas",
    navAbout: "About the Firm",
    navContact: "Contact",
    logoTitle: "Shoaei Law Office",

    // Hero Section
    heroTag: "Legal Advice & Representation in Iran",
    heroTitle: "Your Law Office for <br><span class='accent-text'>Iranian Law.</span>",
    heroDescription: "We represent your interests directly on the ground in Iran. Specialized in complex property disputes, real estate law, and divorce proceedings before Iranian courts – without you needing to travel.",
    heroCtaServices: "Our Practice Areas",
    heroCtaContact: "Schedule a Consultation",

    // Services Section
    servicesSubtitle: "Practice Areas",
    servicesTitle: "Competent Representation in Iran",
    servicesDescription: "Focused legal services to enforce your rights regarding property conflicts and family matters in Iran.",
    service1Title: "Property & Real Estate Law",
    service1Desc: "Clarification of ownership rights, land registry conflicts, inheritance issues regarding real estate, eviction lawsuits, and assistance with property transactions in Iran.",
    service2Title: "Family Law & Divorces",
    service2Desc: "Consultation and representation in divorce proceedings (including mutual divorce), dowry claims (Mehriyeh), alimony, and custody disputes under Iranian family law.",
    service3Title: "Representation for Clients Abroad",
    service3Desc: "Complete management of your legal cases in Iran. Using powers of attorney (Mikhak/Sana), we represent you before local authorities and courts, meaning you do not need to travel.",

    // About Section
    aboutSubtitle: "About the Firm",
    aboutTitle: "Shirin Shoaei Law Office",
    aboutText1: "Legal questions in Iran require precise knowledge of the Iranian Civil and Family Code as well as local court practice. Many Iranians living abroad face huge hurdles when property issues or family matters in their home country need to be settled.",
    aboutText2: "Our office is led by Shirin Shoaei, an attorney licensed by the Iranian Judiciary (member of the Judiciary's Bar Association - مرکز وکلا). Our philosophy is to give you security through direct representation on the ground, create transparency about the state of your proceedings, and defend your rights in Iran in the best possible way.",
    stat1Number: "100%",
    stat1Label: "Focus on Iranian Law",
    stat2Number: "0",
    stat2Label: "Travel effort for you",
    valuesTitle: "Our Core Values",
    value1Title: "Legal Certainty:",
    value1Text: " Precise elaboration according to the current civil and family law of the Islamic Republic of Iran.",
    value2Title: "Convenient Management:",
    value2Text: " Complete representation via power of attorney (Mikhak / Sana), without you needing to travel to Iran.",
    value3Title: "Absolute Transparency:",
    value3Text: " Regular reports on the current state of your proceedings directly from the Iranian courts.",

    // Contact Section
    contactSubtitle: "Contact",
    contactTitle: "Write to Us",
    contactDescription: "Do you have questions or want to discuss a specific legal matter? Contact us directly using the contact form.",
    contactPhoneLabel: "Phone",
    contactEmailLabel: "Email",
    contactFormName: "Name *",
    contactFormEmail: "Email Address *",
    contactFormSubject: "Subject / Case Number (Optional)",
    contactFormMessage: "Description of Your Case *",
    contactFormSubmit: "Send Inquiry",
    placeholderName: "Your Name",
    placeholderEmail: "your.email@example.com",
    placeholderSubject: "E.g., property in Tehran, divorce...",
    placeholderMessage: "Briefly describe the facts of your legal request...",

    // Footer
    footerCopy: "&copy; 2026 Shirin Shoaei Law Office. All rights reserved.",
    footerImpressum: "Legal Notice",
    footerDatenschutz: "Privacy Policy",

    // Validation & Toasts
    validationNameEmpty: "Please enter your name.",
    validationEmailEmpty: "Please enter your email address.",
    validationEmailInvalid: "Please enter a valid email address.",
    validationMessageEmpty: "Please enter a case description.",
    toastSending: "Sending...",
    toastSuccess: "Inquiry sent successfully!",
    toastSuccessDemo: "Inquiry sent successfully (Demo Mode)!",
    toastError: "Oops! Something went wrong. Please try again.",
    toastThemeDark: "Dark mode activated",
    toastThemeLight: "Light mode activated",

    // Impressum Content (German & Iranian Law compatible)
    impressumHtml: `
      <h3>Information according to § 5 TMG / Electronic Commerce Law of the Islamic Republic of Iran (Art. 33)</h3>
      <p>
        <strong>Shirin Shoaei Law Office</strong><br>
        [Tehran, Iran / Consultation in Germany by appointment]<br>
        Licensed Attorney of the Judiciary in the Islamic Republic of Iran
      </p>

      <h3>Represented by:</h3>
      <p>
        [Shirin Shoaei] (Managing Director)
      </p>

      <h3>Contact:</h3>
      <p>
        Phone: <a href="tel:+989127146257" dir="ltr">+98 (0) 912 714 6257</a><br>
        Email: <a href="mailto:sh.shoaei@gmail.com">sh.shoaei@gmail.com</a>
      </p>

      <h3>Attorney Admission & Registration (Iran):</h3>
      <p>
        Admission as an attorney and family advisor was granted by the competent judicial authority of the Islamic Republic of Iran:<br>
        Licensing Authority: [Bar Association of the Judiciary - مرکز وکلا، کارشناسان رسمی و مشاوران خانواده قوه قضائیه]<br>
        <strong>License Number:</strong> [PLACEHOLDER - to be provided by customer]<br>
        <strong>National ID (شناسه ملی):</strong> [PLACEHOLDER - to be provided by customer]
      </p>

      <h3>Professional Regulations (Iran):</h3>
      <p>
        The professional regulations for lawyers of the Islamic Republic of Iran (قانون وکالت و آیین‌نامه اجرایی آن) apply.
      </p>
    `,

    // Datenschutz Content (German DSGVO & Iran Computer Crimes Law compatible)
    datenschutzHtml: `
      <h3>1. Privacy at a Glance</h3>
      <p><strong>General Notes:</strong> The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.</p>
      <p><strong>Attorney-Client Privilege & Privacy:</strong> Communication via this website and the contact form is subject to attorney-client privilege. We strictly comply with the Computer Crimes Law (قانون جرایم رایانه‌ای) of the Islamic Republic of Iran and the principles of the GDPR. Your data is transmitted securely via SSL encryption and will never be shared with third parties without your consent.</p>

      <h3>2. Hosting and Server Infrastructure</h3>
      <p>This website is hosted on external, secure servers (e.g. GitHub Pages). When visiting the site, connection data (IP address, date, time, browser type) necessary for secure delivery is automatically logged.</p>

      <h3>3. Data Collection via the Contact Form</h3>
      <p>If you contact us using the contact form, the details you enter (name, email address, message) will be stored and processed solely to handle your inquiry. We delete this data as soon as it is no longer required for the purpose of the request, unless an attorney-client relationship is established.</p>

      <h3>4. Your Rights</h3>
      <p>You have the right to request information about your stored data free of charge, as well as to correct, block, or delete it. Please contact us via the email address listed in the Imprint.</p>
    `
  },
  fa: {
    // Navigation
    navStart: "صفحه اصلی",
    navServices: "حوزه‌های تخصصی",
    navAbout: "درباره دفتر وکالت",
    navContact: "تماس با ما",
    logoTitle: "دفتر وکالت شعاعی",

    // Hero Section
    heroTag: "وکالت و مشاوره حقوقی تخصصی در ایران",
    heroTitle: "دفتر وکالت و مشاوره حقوقی <br><span class='accent-text'>در امور قوانین ایران.</span>",
    heroDescription: "ما از حقوق و منافع شما مستقیماً در مراجع قضایی داخل ایران دفاع می‌کنیم. تخصص ما در حل پرونده‌های پیچیده ملکی، ثبتی، تقسیم ارث و دعاوی خانواده و طلاق در دادگاه‌های ایران است – بدون نیاز به سفر شما.",
    heroCtaServices: "حوزه‌های تخصصی فعالیت",
    heroCtaContact: "درخواست مشاوره اولیه",

    // Services Section
    servicesSubtitle: "خدمات تخصصی ما",
    servicesTitle: "وکالت و دفاع از حقوق شما در ایران",
    servicesDescription: "ارایه خدمات حقوقی کارآمد و حرفه‌ای جهت حل و فصل دعاوی ملکی و خانوادگی شما در دادگاه‌های داخلی ایران.",
    service1Title: "دعاوی ملکی و ثبتی",
    service1Desc: "حل اختلافات مالکیت، رفع تصرف عدوانی، خلع ید، انحصار وراثت املاک، تخلیه ید، پرونده‌های ثبتی و ارایه مشاوره در معاملات خرید و فروش ملک در دادگاه‌های ایران.",
    service2Title: "دعاوی خانواده و طلاق",
    service2Desc: "وکالت و مشاوره در انواع پرونده‌های طلاق (از جمله طلاق توافقی)، مطالبه مهریه، نفقه، حضانت فرزندان، اجرت‌المثل و اجرای احکام دادگاه‌های خانواده در ایران.",
    service3Title: "وکالت برای ایرانیان مقیم خارج",
    service3Desc: "طرح، پیگیری و دفاع کامل از پرونده‌های حقوقی و کیفری شما در ایران بر اساس وکالت‌نامه‌های رسمی (میخک یا ثنا)، بدون نیاز به حضور فیزیکی شما در کشور.",

    // About Section
    aboutSubtitle: "درباره دفتر وکالت",
    aboutTitle: "دفتر وکالت شیرین شعاعی",
    aboutText1: "قوانین مدنی، ثبتی و خانواده در ایران دارای جزئیات حقوقی و رویه‌های قضایی پیچیده‌ای هستند. بسیاری از هموطنان مقیم خارج از کشور برای مدیریت املاک، ارث یا مسائل خانوادگی خود در ایران با چالش‌های بزرگی روبرو می‌شوند.",
    aboutText2: "این دفتر تحت مدیریت شیرین شعاعی، وکیل پایه یک دادگستری و مشاور حقوقی قوه قضاییه (عضو مرکز وکلا، کارشناسان رسمی و مشاوران خانواده) اداره می‌شود. فلسفه کاری ما ارایه مشاوره دقیق، دفاع حرفه‌ای و ایجاد شفافیت کامل در تمامی مراحل دادرسی برای موکلین عزیز است.",
    stat1Number: "۱۰۰٪",
    stat1Label: "تمرکز تخصصی بر قوانین ایران",
    stat2Number: "۰",
    stat2Label: "بدون نیاز به سفر شما به ایران",
    valuesTitle: "ارزش‌های کلیدی ما",
    value1Title: "امنیت حقوقی:",
    value1Text: " بررسی و تنظیم دقیق لوایح و دادخواست‌ها بر اساس آخرین قوانین مدنی و خانواده ایران.",
    value2Title: "پیگیری بدون نیاز به سفر:",
    value2Text: " وکالت کامل از طریق سامانه‌های ثنا یا میخک بدون نیاز به حضور شما در دادگاه‌های ایران.",
    value3Title: "شفافیت کامل:",
    value3Text: " اطلاع‌رسانی مستمر و ارایه گزارش‌های منظم از روند پرونده در سامانه‌های ابلاغ الکترونیک قضایی.",

    // Contact Section
    contactSubtitle: "ارتباط با ما",
    contactTitle: "ارسال پیام و شرح پرونده",
    contactDescription: "سوالی دارید یا می‌خواهید پرونده حقوقی خود را مطرح کنید؟ از طریق فرم زیر با ما در ارتباط باشید.",
    contactPhoneLabel: "تلفن تماس",
    contactEmailLabel: "پست الکترونیکی",
    contactFormName: "نام و نام خانوادگی *",
    contactFormEmail: "آدرس ایمیل *",
    contactFormSubject: "موضوع پرونده (اختیاری)",
    contactFormMessage: "شرح خلاصه پرونده و خواسته شما *",
    contactFormSubmit: "ارسال درخواست",
    placeholderName: "نام و نام خانوادگی شما",
    placeholderEmail: "your.email@example.com",
    placeholderSubject: "مثال: ملک در تهران، طلاق توافقی...",
    placeholderMessage: "لطفاً خلاصه‌ای از موضوع حقوقی و خواسته خود را بنویسید...",

    // Footer
    footerCopy: "&copy; ۲۰۲۶ دفتر وکالت شیرین شعاعی. تمامی حقوق محفوظ است.",
    footerImpressum: "شناسنامه قانونی سایت",
    footerDatenschutz: "حریم خصوصی و داده‌ها",

    // Validation & Toasts
    validationNameEmpty: "لطفاً نام خود را وارد کنید.",
    validationEmailEmpty: "لطفاً آدرس ایمیل خود را وارد کنید.",
    validationEmailInvalid: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
    validationMessageEmpty: "لطفاً شرح پرونده خود را بنویسید.",
    toastSending: "در حال ارسال...",
    toastSuccess: "درخواست شما با موفقیت ارسال شد!",
    toastSuccessDemo: "درخواست با موفقیت ارسال شد (حالت دمو)!",
    toastError: "خطایی رخ داد! لطفاً دوباره تلاش کنید.",
    toastThemeDark: "حالت تاریک فعال شد",
    toastThemeLight: "حالت روشن فعال شد",

    // Impressum Content (German & Iranian Law compatible)
    impressumHtml: `
      <h3>شناسنامه قانونی سایت مطابق با ماده ۳۳ قانون تجارت الکترونیکی جمهوری اسلامی ایران</h3>
      <p>
        <strong>دفتر وکالت شیرین شعاعی</strong><br>
        [تهران، ایران / ارایه خدمات به موکلین مقیم خارج از کشور]<br>
        وکیل پایه یک دادگستری و مشاور حقوقی قوه قضاییه
      </p>

      <h3>مدیریت و نمایندگی قانونی:</h3>
      <p>
        [شیرین شعاعی] (وکیل پایه یک دادگستری)
      </p>

      <h3>اطلاعات تماس:</h3>
      <p>
        تلفن تماس: <a href="tel:+989127146257" dir="ltr">+۹۸ ۹۱۲ ۷۱۴ ۶۲۵۷</a><br>
        پست الکترونیکی: <a href="mailto:sh.shoaei@gmail.com" dir="ltr">sh.shoaei@gmail.com</a>
      </p>

      <h3>مشخصات ثبت شرکت و پروانه وکالت (ایران):</h3>
      <p>
        پروانه وکالت رسمی صادره از قوه قضاییه جمهوری اسلامی ایران:<br>
        مرجع صادرکننده: [مرکز وکلا، کارشناسان رسمی و مشاوران خانواده قوه قضائیه]<br>
        <strong>شماره پروانه وکالت:</strong> [پلاسکولدر - توسط مشتری اعلام خواهد شد]<br>
        <strong>شناسه ملی:</strong> [پلاسکولدر - توسط مشتری اعلام خواهد شد]
      </p>

      <h3>قوانین حاکم:</h3>
      <p>
        فعالیت این دفتر تحت قانون وکالت دادگستری و آیین‌نامه‌های اجرایی مصوب قوه قضاییه جمهوری اسلامی ایران می‌باشد.
      </p>
    `,

    // Datenschutz Content (German DSGVO & Iran Computer Crimes Law compatible)
    datenschutzHtml: `
      <h3>۱. حریم خصوصی و اسرار موکل در یک نگاه</h3>
      <p><strong>توضیحات عمومی:</strong> اطلاعات ارسالی از طریق این سایت به عنوان اسرار حرفه‌ای وکالت تلقی گردیده و به صورت محرمانه محافظت می‌شود.</p>
      <p><strong>قوانین جرایم رایانه‌ای ایران:</strong> ما متعهد به رعایت کامل قانون جرایم رایانه‌ای جمهوری اسلامی ایران و اصول حفاظت از داده‌ها هستیم. اطلاعات و مدارک شما به صورت رمزنگاری شده منتقل شده و هرگز بدون اجازه رسمی در اختیار اشخاص ثالث قرار نخواهد گرفت.</p>

      <h3>۲. میزبانی و امنیت داده‌ها</h3>
      <p>این وب‌سایت در سرورهای خارجی ایمن (مانند GitHub Pages) میزبانی می‌شود. هنگام بازدید شما، داده‌های فنی ارتباطی جهت بارگذاری ایمن ثبت می‌شوند.</p>

      <h3>۳. جمع‌آوری داده‌ها از طریق فرم تماس</h3>
      <p>هنگامی که شرح پرونده خود را از طریق فرم تماس ارسال می‌کنید، اطلاعات وارد شده صرفاً برای بررسی حقوقی موضوع و برقراری ارتباط با شما استفاده می‌شود. در صورت عدم عقد قرارداد وکالت، اطلاعات شما پس از بررسی حذف خواهد شد.</p>

      <h3>۴. حقوق قانونی شما</h3>
      <p>شما حق دسترسی، اصلاح یا درخواست حذف اطلاعات شخصی خود را دارید. برای این منظور می‌توانید از طریق ایمیل ذکر شده در شناسنامه قانونی با ما تماس بگیرید.</p>
    `
  }
};
