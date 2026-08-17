"use client";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  type: string;
  link?: string;
};

const publications: Publication[] = [
  {
    title: "Differentiating Parkinson's disease dementia and mild cognitive impairment from idiopathic Parkinson's disease using machine learning approach",
    authors: "A. Bhattacharya, N. Kamble, S. Akshay, A. Stezin, S. Hegde, R. Yadav, P. Pal",
    venue: "MOVEMENT DISORDERS",
    year: "2020",
    type: "Conference / Book Chapter",
    link: "https://www.mdsabstracts.org/abstract/differentiating-parkinsons-disease-dementia-and-mild-cognitive-impairment-from-idiopathic-parkinsons-disease-using-machine-learning-approach/",
  },
  {
    title: "E-commerce Website User Engagement Analysis: An Eye Tracking Viewpoint",
    authors: "S. Akshay, R. Nishanth",
    venue: "MysuruCon 2022 - 2022 IEEE 2nd Mysore Sub Section International Conference",
    year: "2022",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85145352567&doi=10.1109%2fMysuruCon55714.2022.9972502&partnerID=40&md5=6be02ed292bf25dd78620e9eeb411f5e",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "S. Akshay, H.K.T. Das, M. Prakash",
    venue: "MysuruCon 2022 - 2022 IEEE 2nd Mysore Sub Section International Conference",
    year: "2022",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85145351027&doi=10.1109%2fMysuruCon55714.2022.9972402&partnerID=40&md5=832d35bf227955498ce0e74c168078ed",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "S. Akshay, P. Vasanth",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies, CONECCT 2022",
    year: "2022",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85138299934&doi=10.1109%2fCONECCT55679.2022.9865694&partnerID=40&md5=5bb04e6041b0e3972901f25bc17dafdf",
  },
  {
    title: "Categorization of Fruit images using Artificial Bee Colony Algorithm based on GLCM features",
    authors: "S. Akshay, S.M. Deepika",
    venue: "Proceedings of the 2022 International Conference on Electronic Systems and Intelligent Computing, ICESIC 2022",
    year: "2022",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85133228348&doi=10.1109%2fICESIC53714.2022.9783611&partnerID=40&md5=aad9e70f88ff57bdd518805936a56a00",
  },
  {
    title: "Classification of Beneficial and non-Beneficial Bacteria using Random Forest Algorithm",
    authors: "S. Akshay, M. Jeevan Urs",
    venue: "Proceedings of the 3rd International Conference on Inventive Research in Computing Applications, ICIRCA 2021",
    year: "2021",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116879658&doi=10.1109%2fICIRCA51532.2021.9544878&partnerID=40&md5=f67ddc22250cde475d0044696ba59dbb",
  },
  {
    title: "Face Matching in Indian Citizens using CNN",
    authors: "S. Akshay, S.R. Joshi",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116697919&doi=10.1109%2fICESC51422.2021.9532963&partnerID=40&md5=ca8b7e0248325936ebcc016d2d22bf67",
  },
  {
    title: "Detection and classification of areca nut diseases",
    authors: "S. Akshay, A. Hegde",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116675829&doi=10.1109%2fICESC51422.2021.9532754&partnerID=40&md5=4b70f01ff6bab0ab0b8a51eb1b1c7bc5",
  },
  {
    title: "Drowsy Driver Detection using Eye-Tracking through Machine Learning",
    authors: "S. Akshay, M.B. Abhishek, D. Sudhanshu, C. Anuvaishnav",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85116675031&doi=10.1109%2fICESC51422.2021.9532928&partnerID=40&md5=a4f053b16e530c8e1ebd2d7b1c8d9ea6",
  },
  {
    title: "A Comparative Study on Interactive Segmentation Algorithms for Segmentation of Animal Images",
    authors: "N. Manohar, S. Akshay, N. Shobha Rani",
    venue: "Smart Innovation, Systems and Technologies",
    year: "2021",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85097253545&doi=10.1007%2f978-981-15-7062-9_40&partnerID=40&md5=dedebf869545910f3f7db93b39c77a0a",
  },
  {
    title: "Machine learning algorithm to identify eye movement metrics using raw eye tracking data",
    authors: "S. Akshay, Y.J. Megha, C.B. Shetty",
    venue: "Proceedings of the 3rd International Conference on Smart Systems and Inventive Technology, ICSSIT 2020",
    year: "2020",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85094809209&doi=10.1109%2fICSSIT48917.2020.9214290&partnerID=40&md5=de3f811ce232adc668af9bac046a6b7c",
  },
  {
    title: "Satellite Image Classification for Detecting Unused Landscape using CNN",
    authors: "S. Akshay, T.K. Mytravarun, N. Manohar, M.A. Pranav",
    venue: "Proceedings of the International Conference on Electronics and Sustainable Communication Systems, ICESC 2020",
    year: "2020",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85090845405&doi=10.1109%2fICESC48915.2020.9155859&partnerID=40&md5=7c2a255af267e80eb71635fd0b8629db",
  },
  {
    title: "Symbolic Representation of Speech for Text Independent Speaker Recognition",
    authors: "S. Akshay, P. Apoorva",
    venue: "",
    year: "",
    type: "Publication",
  },
  {
    title: "Segmentation and classification of fruit images independent of image orientation using height width vectors",
    authors: "R. Akshitha Raj, M. Gopika, P. Apoorva, S. Akshay",
    venue: "International Journal of Innovative Technology and Exploring Engineering",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85088669474&doi=10.35940%2fijitee.i9001.078919&partnerID=40&md5=3fbda39839d966a9bc38537d0953b20f",
  },
  {
    title: "Facial expression recognition using compressed images",
    authors: "S. Akshay, S. Mandara, A.G. Rao",
    venue: "International Journal of Recent Technology and Engineering",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85071104932&doi=10.35940%2fijrte.B1041.078219&partnerID=40&md5=06b832b46f6b6480dc48984237499de5",
  },
  {
    title: "Cancer cell detection using FMM compressed images",
    authors: "A.G. Bhargavi, H.N. Nandini, S. Akshay",
    venue: "International Journal of Recent Technology and Engineering",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85070944422&doi=10.35940%2fijrte.B1038.078219&partnerID=40&md5=b18fc1bebf4fbbeae25df6f93ff6184a",
  },
  {
    title: "Visual search capability using heatmaps",
    authors: "S. Akshay, A. Rames, P. Ashika",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069947820&partnerID=40&md5=3a368a19b0eee2bb1b290f2aa15ac528",
  },
  {
    title: "Handwritten english character recognition and speech synthesis to aid text-to-speech applications",
    authors: "S. Akshay, J.R. Chandana, G. Namita",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069931940&partnerID=40&md5=4e14d10dba959e7044b4f3280dd2ef09",
  },
  {
    title: "Identification of parkinson disease patients classification using feed forward technique based on speech signals",
    authors: "S. Akshay, K. Vincent",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069903479&partnerID=40&md5=3f94137e2f2b9b6d59e57c823af27601",
  },
  {
    title: "IoT based human search and rescue robot using swarm robotics",
    authors: "M.D. Machaiah, S. Akshay",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85069897812&partnerID=40&md5=ca7e59ddb24041333cdac7328dfa8866",
  },
  {
    title: "Image plagiarism detection using compressed images",
    authors: "S. Akshay, B.N. Chaitanya, R. Kumar",
    venue: "International Journal of Innovative Technology and Exploring Engineering",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85067901272&partnerID=40&md5=bbdd674362b1d1b6cbe6cc623db92437",
  },
  {
    title: "An R based interface to understand cognitive ability of different participants using fixation and saccade detection",
    authors: "S. Akshay, P. Ashika, A. Ramesh",
    venue: "International Journal of Research in Pharmaceutical Sciences",
    year: "2019",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85071222178&doi=10.26452%2fijrps.v10i3.1438&partnerID=40&md5=d55eb794f5ce12e4023f7829cf7b938a",
  },
  {
    title: "Comparative analysis of heat maps over voronoi diagram in eye gaze data visualization",
    authors: "S. Akshay, M.R. Akash, G.S.A. Krishnan",
    venue: "Proceedings of 2017 International Conference on Intelligent Computing and Control, I2C2 2017",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85049739730&doi=10.1109%2fI2C2.2017.8321960&partnerID=40&md5=4f605381e056e109ee93c55f022a0471",
  },
  {
    title: "Analysis of spatial eye gaze data for aiding gender identification",
    authors: "S. Akshay, V.P. Lakshmipriya, S. Sikha",
    venue: "Proceedings of 2017 International Conference on Intelligent Computing and Control, I2C2 2017",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85049691006&doi=10.1109%2fI2C2.2017.8321931&partnerID=40&md5=73c433a1d60e693df2ffc96af74c207f",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "S Akshay, Hrithik Das KT, Manu Prakash",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/MysuruCon55714.2022.9972402",
  },
  {
    title: "Segmentation and classification of FMM compressed retinal images using watershed and canny segmentation and support vector machine",
    authors: "S. Akshay, P. Apoorva",
    venue: "Proceedings of the 2017 IEEE International Conference on Communication and Signal Processing, ICCSP 2017",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046664411&doi=10.1109%2fICCSP.2017.8286531&partnerID=40&md5=081314ca71df64a313f77b2d1e0c41dc",
  },
  {
    title: "Bandwidth optimized multicast routing algorithm based on hybrid mesh and tree structure with collision control in MANET using Lempel-Ziv-Oberhumer method",
    authors: "S. Akshay, P. Apoorva",
    venue: "Proceedings of the 2017 IEEE International Conference on Communication and Signal Processing, ICCSP 2017",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85046622827&doi=10.1109%2fICCSP.2017.8286407&partnerID=40&md5=b04a0bc6e8add034f4092b1090873cee",
  },
  {
    title: "Vector quantization based algorithm to calculate fixation from raw eye tracking data",
    authors: "S. Akshay, M. Adarsh",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060486172&partnerID=40&md5=63a4cc07d3d00c7054df476f4305f85d",
  },
  {
    title: "Analysis of variations in pupil diameter through eye tracking during various visual search",
    authors: "S. Akshay, H. Anitha",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060459807&partnerID=40&md5=e4dc29f81bd10799d7b6d33ed5068ee3",
  },
  {
    title: "Saccade calculation algorithm based on vector quantized fixation",
    authors: "S. Akshay, V.P. Ashin",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060448956&partnerID=40&md5=78c2b3f54881e419240e439ee4c0b745",
  },
  {
    title: "Eye segmentation using viola-jones algorithm on FMM compressed images for aiding eye gaze analysis",
    authors: "S. Akshay, A.P. Harshitha",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060043932&partnerID=40&md5=8207f345f2dd43f32a47f327ff0d3900",
  },
  {
    title: "Traffic sign board detection using canny edge detection for compressed images",
    authors: "S. Akshay, A. Rahul, B.M. Yashwanth Brahma",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85060040391&partnerID=40&md5=60007c019f9459d8657334a6d059662d",
  },
  {
    title: "Control of the home appliances using mobile telephony",
    authors: "S. Akshay, K. Arun, P.B. Sunu",
    venue: "International Journal of Applied Engineering Research",
    year: "2016",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-85026742127&partnerID=40&md5=eae917fbb614c7b7d09368a9ed3d8c6c",
  },
  {
    title: "Improved multiple object detection and tracking using KF-OF method",
    authors: "S. Akshay, S. Thomas, A. Ram Prashanth",
    venue: "International Journal of Engineering and Technology",
    year: "2016",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84971524644&partnerID=40&md5=0ec06186c3e17fedbffa73dbaef982d5",
  },
  {
    title: "Single moving object detection and tracking using Horn-Schunck optical flow method",
    authors: "S. Akshay",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84937869209&partnerID=40&md5=cd41bda7d16b610075d7f79d0e764a28",
  },
  {
    title: "A survey on classification and clustering algorithms for uncompressed and compressed text",
    authors: "S. Akshay, K. Nayana, S. Karthika",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84932157061&partnerID=40&md5=cd456748fe2fb466b0aaa0ce58b1ad59",
  },
  {
    title: "Control of the locomotion of temperature sensor",
    authors: "M. Malvika Devaiah, K.S. Sandhya, S. Akshay",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
    link: "https://www.scopus.com/inward/record.uri?eid=2-s2.0-84928910600&partnerID=40&md5=dd491a318b864ec4b4e13655cf0bb235",
  },
  {
    title: "Symbolic Representation of Speech for Text Independent Speaker Recognition",
    authors: "S. Akshay, P. Apoorva",
    venue: "International Journal of Science and Research (IJSR)",
    year: "2014",
    type: "Journal",
    link: "https://www.ijsr.net/get_abstract.php?paper_id=20141285",
  },
  {
    title: "Security Measures on Mobile Technology Using Software as a Service (SaaS)",
    authors: "P. Apoorva, S. Akshay",
    venue: "International Journal of Science and Research (IJSR)",
    year: "2014",
    type: "Journal",
    link: "https://www.ijsr.net/get_abstract.php?paper_id=20141285",
  },
  {
    title: "Resource Planning Using Agile Methodology -Corporate Case Study",
    authors: "Raju. Jithin, S. Akshay",
    venue: "INTERNATIONAL JOURNAL OF INNOVATIVE TRENDS IN ENGINEERING (IJITE)",
    year: "2015",
    type: "Journal",
    link: "https://www.ijsr.net/get_abstract.php?paper_id=20141285",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "S Akshay, Poojitha Vasanth",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT55679.2022.9865694",
  },
  {
    title: "Classification of Satellite Images",
    authors: "N. Manohar, M. A. Pranav, S. Akshay, T. K. Mytravarun",
    venue: "Information and Communication Technology for Intelligent Systems",
    year: "2021",
    type: "Conference / Book Chapter",
  },
  {
    title: "Effective Utilization of Shared Nearest Node for Message Diffusion in Social Network Using Dbscan",
    authors: "P Apoorva, S Akshay, R Priyanka, N Nayana",
    venue: "International Journal of Engineering & Technology",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Energy and Performance Analysis of Raspberry Pi with Modern Computing Devices",
    authors: "S Akshay, B Vishnukumar, Vimal Mohan, MS Anand",
    venue: "International Journal of Engineering & Technology",
    year: "2018",
    type: "Journal",
  },
  {
    title: "iAOI: An Eye Movement Based Deep Learning Model to Identify Areas of Interest",
    authors: "S Akshay, J Amudha, Nakka Narmada, Amitabh Bhattacharya, Nitish Kamble, Pramod Kumar Pal",
    venue: "International Conference on Multi-disciplinary Trends in Artificial Intelligence",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1007/978-3-031-36402-0_61",
  },
  {
    title: "iSTIMULI: Prescriptive Stimulus Design for Eye Movement Analysis of Patients with Parkinson’s Disease",
    authors: "S Akshay, J Amudha, Nilima Kulkarni, LK Prashanth",
    venue: "International Conference on Multi-disciplinary Trends in Artificial Intelligence",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1007/978-3-031-36402-0_55",
  },
  {
    title: "iAlert: An Alert System based on Eye Gaze for Human Assistance",
    authors: "S Akshay, S Dhanush, Sujayeendra Rao",
    venue: "2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal impact using Marketing, Entrepreneurship and Talent (TEMSMET)",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/TEMSMET56707.2023.10149942",
  },
  {
    title: "An Eye Movement Based Patient Assistance System",
    authors: "S Akshay, K Venkatesh",
    venue: "2022 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NKCon56289.2022.10126594",
  },
  {
    title: "UEye: Insights on User Interface Design Using Eye Movement Visualizations",
    authors: "S Akshay, Anupam Shukla, Vishnu K Raman",
    venue: "International Conference on Advances in Computing and Data Sciences",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1007/978-3-031-37940-6_21",
  },
  {
    title: "Exploring Eye Gaze Patterns in Three Dimensions: An Innovative Visualization Dashboard",
    authors: "S Akshay, Yashwanth M V, Manohar N, Tian Jipeng, Amudha J",
    venue: "2024 IEEE International Conference on Contemporary Computing and Communications (InC4)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/InC460750.2024.10649178",
  },
  {
    title: "Object Detection Using Thermal Imaging",
    authors: "S Akshay, Shukoh Neelakandan, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677183",
  },
  {
    title: "Classification of Skin Lesions using Five Modulus Method for image compression",
    authors: "S Akshay, Akshara P Vinod, Anusree M A, Chandru K, Abhishek H P, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677124",
  },
  {
    title: "Multi-Modal AI-Based Framework for PCOD Detection and Risk Assessment: Addressing a Growing Health Crisis in India",
    authors: "S Akshay, Adithya G Nath, Varsha A R, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677186",
  },
  {
    title: "Enhancing Skin Cancer Detection: Leveraging Deep Learning and Ensemble Learning Techniques for Improved Diagnostics",
    authors: "Akshay S, Abhishek Ramakrishna Hegde, Manoj Kumar N, Kavya Bijith P, Anirudh Samaga V, Akshay R",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NMITCON65824.2025.11188004",
  },
  {
    title: "Analyzing the Impact of Mental Health on Academic Performance: AI Approach Based on Student Feedback",
    authors: "Sumukh V, Nithesh Dalwai C, Sindhu R Kashyap, Akshay S",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NMITCON65824.2025.11188402",
  },
  {
    title: "Optimizing Identification of Local Medical Services Using Whale Optimization Algorithm",
    authors: "Akshay S, Abhinand K P, Athul Sajikumar, Sreenath K, Hariram J S",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NMITCON65824.2025.11188416",
  },
  {
    title: "Measuring Image Quality: Crucial Indicators for Evaluating Camera-Captured Document Contents",
    authors: "Shrunga D., Akshay S., Koushik K. S.",
    venue: "2025 12th International Conference on Computing for Sustainable Global Development (INDIACom)",
    year: "2025",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.23919/INDIACom66777.2025.11115464",
  },
  {
    title: "An Approach to Estimate the Measurement for Water Bodies in Satellite Images",
    authors: "Akshay S, Anudeep Dasari, Manoj Kumar",
    venue: "2024 International Conference on Recent Innovation in Smart and Sustainable Technology (ICRISST)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICRISST59181.2024.10922072",
  },
  {
    title: "Modelling and Simulation of Fiber Bragg Grating Sensors for Temperature and Pressure Measurements in Environmental Monitoring Stations",
    authors: "Chethana K, Malathi. S, Akshay S, Swetha K",
    venue: "2024 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NKCon62728.2024.10775279",
  },
  {
    title: "Object Detection Using Thermal Imaging",
    authors: "Akshay S, Shukoh Neelakandan, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677183",
  },
  {
    title: "Multi-Modal AI-Based Framework for PCOD Detection and Risk Assessment: Addressing a Growing Health Crisis in India",
    authors: "Akshay S, Adithya G Nath, Varsha A R, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677186",
  },
  {
    title: "Classification of Skin Lesions using Five Modulus Method for image compression",
    authors: "Akshay S, Akshara P Vinod, Anusree M A, Chandru K, Abhishek H P, Aswin G Nath",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT62155.2024.10677124",
  },
  {
    title: "Exploring Eye Gaze Patterns in Three Dimensions: An Innovative Visualization Dashboard",
    authors: "Akshay S, Yashwanth M V, Manohar N, Tian Jipeng, Amudha J",
    venue: "2024 IEEE International Conference on Contemporary Computing and Communications (InC4)",
    year: "2024",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/InC460750.2024.10649178",
  },
  {
    title: "Categorizing Participants Based on Their Reaction Time Using Eye Tracking",
    authors: "Akshay S, Pranav Sai Pradeep",
    venue: "2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CCEM60455.2023.00023",
  },
  {
    title: "FAST RCNN-Based Implementation of Cloudi: Converting Raw Eye Gaze Data into Usable Format",
    authors: "Akshay S, Pradyumna J Bharadwaja",
    venue: "2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CCEM60455.2023.00046",
  },
  {
    title: "iAlert: An Alert System based on Eye Gaze for Human Assistance",
    authors: "S Akshay, S Dhanush, Sujayeendra Rao",
    venue: "2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal impact using Marketing, Entrepreneurship and Talent (TEMSMET)",
    year: "2023",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/TEMSMET56707.2023.10149942",
  },
  {
    title: "An Eye Movement Based Patient Assistance System",
    authors: "Akshay S, Venkatesh K",
    venue: "2022 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/NKCon56289.2022.10126594",
  },
  {
    title: "Eye Detection from Face Images covered in Face-masks using HAAR features",
    authors: "S Akshay, Manu Prakash, KT Hrithik Das",
    venue: "2022 IEEE 7th International Conference on Recent Advances and Innovations in Engineering (ICRAIE)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICRAIE56454.2022.10054252",
  },
  {
    title: "E-commerce Website User Engagement Analysis: An Eye Tracking Viewpoint",
    authors: "Akshay S, Nishanth R",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/MysuruCon55714.2022.9972502",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "Akshay S, Hrithik Das Kt, Manu Prakash",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/MysuruCon55714.2022.9972402",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "S Akshay, Poojitha Vasanth",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/CONECCT55679.2022.9865694",
  },
  {
    title: "Categorization of Fruit images using Artificial Bee Colony Algorithm based on GLCM features",
    authors: "Akshay S, Deepika Shetty M A",
    venue: "2022 International Conference on Electronic Systems and Intelligent Computing (ICESIC)",
    year: "2022",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICESIC53714.2022.9783611",
  },
  {
    title: "Classification of Beneficial and non-Beneficial Bacteria using Random Forest Algorithm",
    authors: "Akshay S, Jeevan Urs M",
    venue: "2021 Third International Conference on Inventive Research in Computing Applications (ICIRCA)",
    year: "2021",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICIRCA51532.2021.9544878",
  },
  {
    title: "Drowsy Driver Detection using Eye-Tracking through Machine Learning",
    authors: "Akshay S, Abhishek MB, Sudhanshu D, Anuvaishnav C",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICESC51422.2021.9532928",
  },
  {
    title: "Face Matching in Indian Citizens using CNN",
    authors: "Akshay S, Shreya R Joshi",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICESC51422.2021.9532963",
  },
  {
    title: "Detection and classification of areca nut diseases",
    authors: "Akshay S, Ashwini Hegde",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICESC51422.2021.9532754",
  },
  {
    title: "Machine Learning Algorithm to Identify Eye Movement Metrics using Raw Eye Tracking Data",
    authors: "S Akshay, Y J Megha, Chethan Babu Shetty",
    venue: "2020 Third International Conference on Smart Systems and Inventive Technology (ICSSIT)",
    year: "2020",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICSSIT48917.2020.9214290",
  },
  {
    title: "Satellite Image Classification for Detecting Unused Landscape using CNN",
    authors: "S. Akshay, T. K. Mytravarun, N. Manohar, M. A. Pranav",
    venue: "2020 International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2020",
    type: "Conference / Book Chapter",
    link: "https://doi.org/10.1109/ICESC48915.2020.9155859",
  },
  {
    title: "Actor-critic guided CDBN with GAN augmentation for robust facial emotion recognition",
    authors: "Akshay S, Jnana Sai S R, Sinchana B R, Kannan M, Adwitiya Mukhopadhyay",
    venue: "MethodsX",
    year: "2026",
    type: "Journal",
    link: "https://www.sciencedirect.com/science/article/pii/S2215016125006181",
  },
  {
    title: "EyeMap: A fusion-based method for eye movement-based visual attention maps as predictive markers of parkinsonism",
    authors: "Akshay S, Amudha J, Amitabh Bhattacharya, Nitish Kamble, Pramod Kumar Pal",
    venue: "MethodsX",
    year: "2025",
    type: "Journal",
    link: "https://www.sciencedirect.com/science/article/pii/S2215016125004510",
  },
  {
    title: "Hybrid Deep Learning and Machine Learning Framework for Automated Pneumonia Detection in Chest X-ray Images",
    authors: "Akshay S, Sneha Kashyap, Danikk Patel H N, Pavan Kumar Y R",
    venue: "MethodsX",
    year: "2025",
    type: "Journal",
    link: "https://www.sciencedirect.com/science/article/pii/S2215016125005734",
  },
  {
    title: "Differentiating Parkinson’s Disease Dementia and Mild Cognitive Impairment from Idiopathic Parkinson’s Disease Using Machine Learning Approach",
    authors: "A. Bhattacharya, N. Kamble, A. S, V. N, A. Stezin, S. Hegde, A. J, R. Yadav, P. Pal",
    venue: "Movement Disorders • 35 (Suppl 1)",
    year: "2020",
    type: "Abstract",
    link: "https://www.mdsabstracts.org/abstract/differentiating-parkinsons-disease-dementia-and-mild-cognitive-impairment-from-idiopathic-parkinsons-disease-using-machine-learning-approach/",
  }
];

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-[#030712] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <a
            href="/"
            className="text-sm font-medium text-blue-300 hover:text-blue-200"
          >
            ← Back to Home
          </a>

          <span className="mx-auto mt-8 block w-fit rounded-full border border-blue-500/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-300">
            PUBLICATIONS
          </span>

          <h1 className="mt-8 text-5xl font-black">All Publications</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            Complete list of research publications in Artificial Intelligence,
            Computer Vision, Eye Tracking and Healthcare AI.
          </p>
        </div>

        <div className="mt-12 grid gap-6">
          {publications.map((paper, index) => (
            <article
              key={`${paper.title}-${index}`}
              className="rounded-3xl border border-white/10 bg-slate-900/70 p-7 backdrop-blur-xl transition hover:border-blue-500/40"
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                <div className="min-w-0">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
                      {paper.type}
                    </span>
                    <span className="text-sm text-slate-500">{paper.year}</span>
                  </div>

                  <h2 className="text-xl font-bold leading-8 text-white">
                    {paper.title}
                  </h2>

                  <p className="mt-3 text-sm leading-7 text-slate-400">
                    {paper.authors}
                  </p>

                  <p className="mt-3 text-base text-slate-500">
                    {paper.venue}
                  </p>
                </div>

                {paper.link && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 rounded-xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/5"
                  >
                    View Publication →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-slate-500">
          Showing {publications.length} publications
        </p>
      </div>
    </main>
  );
}
