/* Publications: your scholarly profile links + your list of papers.
   Profile links show as icons. Leave any value "" to hide that icon.
   The papers appear inside a collapsible panel. */

window.SITE_CONTENT = window.SITE_CONTENT || {};


/* Publications: your scholarly profile links + your list of papers.
   Profile links show as icons. Leave any value "" to hide that icon.
   The papers appear inside a collapsible panel. */

window.SITE_CONTENT = window.SITE_CONTENT || {};

window.SITE_CONTENT.scholarLinks = {
  googleScholar:   "https://scholar.google.com/citations?user=G7BMGQYAAAAJ",
  // Paste your Semantic Scholar author page URL here to show that icon.
  // (Open semanticscholar.org, search your name, open your author page, copy the URL.)
  semanticScholar: "https://www.semanticscholar.org/author/Shohreh-Haddadan/121857840",
  orcid:           "https://orcid.org/0000-0001-5586-5675"
};

// Newest first. "link" is optional ("") — set it to make the title clickable.
window.SITE_CONTENT.publications = [
  {
    title:   "ACE-ICD: Acronym Expansion As Data Augmentation For Automated ICD Coding",
    authors: "Tuan-Dung Le, Shohreh Haddadan, Thanh Thieu",
    venue:   "Findings of IJCNLP-AACL",
    year:    "2025",
    link:    "https://aclanthology.org/2025.findings-ijcnlp.102/"
  },
  {
    title:   "LAILab at Chemotimelines 2024: Finetuning sequence-to-sequence language models for temporal relation extraction towards cancer patients undergoing chemotherapy treatment",
    authors: "Shohreh Haddadan, Tuan-Dung Le, Thanh Duong, Thanh Thieu",
    venue:   "Clinical NLP Workshop, NAACL",
    year:    "2024",
    link:    "https://aclanthology.org/2024.clinicalnlp-1.37/"
  },
  {
    title:   "Soft Prompt Tuning for Cross-Lingual Transfer: When Less is More",
    authors: "Fred Philippy, Siwen Guo, Shohreh Haddadan, Cedric Lothritz, Jacques Klein, Tegawendé F. Bissyandé",
    venue:   "arXiv preprint",
    year:    "2024",
    link:    "https://arxiv.org/abs/2402.03782"
  },
  {
    title:   "Forget NLI, Use a Dictionary: Zero-Shot Topic Classification for Low-Resource Languages with Application to Luxembourgish",
    authors: "Fred Philippy, Shohreh Haddadan, Siwen Guo",
    venue:   "arXiv preprint",
    year:    "2024",
    link:    "https://arxiv.org/abs/2404.03912"
  },
  {
    title:   "DISPUTool 2.0: A Modular Architecture for Multi-Layer Argumentative Analysis of Political Debates",
    authors: "Pierpaolo Goffredo, Elena Cabrio, Serena Villata, Shohreh Haddadan, Jhonatan Torres Sanchez",
    venue:   "AAAI (Demonstrations)",
    year:    "2023",
    link:    "https://doi.org/10.1609/aaai.v37i13.27069"
  },
  {
    title:   "Towards a Common Understanding of Contributing Factors for Cross-Lingual Transfer in Multilingual Language Models: A Review",
    authors: "Fred Philippy, Siwen Guo, Shohreh Haddadan",
    venue:   "ACL",
    year:    "2023",
    link:    "https://aclanthology.org/2023.acl-long.323/"
  },
  {
    title:   "Evaluating Parameter-Efficient Finetuning Approaches for Pre-trained Models on the Financial Domain",
    authors: "Isabella Olariu, Cedric Lothritz, Jacques Klein, Tegawendé F. Bissyandé, Siwen Guo, Shohreh Haddadan",
    venue:   "Findings of EMNLP",
    year:    "2023",
    link:    "https://aclanthology.org/2023.findings-emnlp.1035/"
  },
  {
    title:   "Identifying the Correlation Between Language Distance and Cross-Lingual Transfer in a Multilingual Representation Space",
    authors: "Fred Philippy, Siwen Guo, Shohreh Haddadan",
    venue:   "Findings of ACL",
    year:    "2023",
    link:    "https://arxiv.org/abs/2305.02151"
  },
  {
    title:   "Topic Modelling and Frame Identification for Political Arguments",
    authors: "Shohreh Haddadan, Elena Cabrio, Axel J. Soto, Serena Villata",
    venue:   "AIxIA",
    year:    "2022",
    link:    ""
  },
  {
    title:   "Fallacious Argument Classification in Political Debates",
    authors: "Pierpaolo Goffredo, Shohreh Haddadan, Vorakit Vorakitphan, Elena Cabrio, Serena Villata",
    venue:   "IJCAI",
    year:    "2022",
    link:    ""
  },
  {
    title:   "Yes, We Can! Mining Arguments in 50 Years of US Presidential Campaign Debates",
    authors: "Shohreh Haddadan, Elena Cabrio, Serena Villata",
    venue:   "ACL",
    year:    "2019",
    link:    ""
  },
  {
    title:   "DISPUTool – A Tool for the Argumentative Analysis of Political Debates",
    authors: "Shohreh Haddadan, Elena Cabrio, Serena Villata",
    venue:   "IJCAI",
    year:    "2019",
    link:    ""
  }
];