"use client";

import { useMemo, useState } from "react";

const publications = [
  {
    title: "Differentiating Parkinson's disease dementia and mild cognitive impairment from idiopathic Parkinson's disease using machine learning approach",
    authors: "Bhattacharya, A., Kamble, N., Akshay, S., Stezin, A., Hegde, S., Yadav, R., Pal, P.",
    venue: "MOVEMENT DISORDERS",
    year: "2020",
    type: "Conference",
  },
  {
    title: "E-commerce Website User Engagement Analysis: An Eye Tracking Viewpoint",
    authors: "Akshay, S., Nishanth, R.",
    venue: "MysuruCon 2022 - 2022 IEEE 2nd Mysore Sub Section International Conference",
    year: "2022",
    type: "Conference",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "Akshay, S., Das, H.K.T., Prakash, M.",
    venue: "MysuruCon 2022 - 2022 IEEE 2nd Mysore Sub Section International Conference",
    year: "2022",
    type: "Conference",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "Akshay, S., Vasanth, P.",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies, CONECCT 2022",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Categorization of Fruit images using Artificial Bee Colony Algorithm based on GLCM features",
    authors: "Akshay, S., Deepika, S.M.",
    venue: "Proceedings of the 2022 International Conference on Electronic Systems and Intelligent Computing, ICESIC 2022",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Classification of Beneficial and non-Beneficial Bacteria using Random Forest Algorithm",
    authors: "Akshay, S., Jeevan Urs, M.",
    venue: "Proceedings of the 3rd International Conference on Inventive Research in Computing Applications, ICIRCA 2021",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Face Matching in Indian Citizens using CNN",
    authors: "Akshay, S., Joshi, S.R.",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Detection and classification of areca nut diseases",
    authors: "Akshay, S., Hegde, A.",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Drowsy Driver Detection using Eye-Tracking through Machine Learning",
    authors: "Akshay, S., Abhishek, M.B., Sudhanshu, D., Anuvaishnav, C.",
    venue: "Proceedings of the 2nd International Conference on Electronics and Sustainable Communication Systems, ICESC 2021",
    year: "2021",
    type: "Conference",
  },
  {
    title: "A Comparative Study on Interactive Segmentation Algorithms for Segmentation of Animal Images",
    authors: "Manohar, N., Akshay, S., Shobha Rani, N.",
    venue: "Smart Innovation, Systems and Technologies",
    year: "2021",
    type: "Journal",
  },
  {
    title: "Machine learning algorithm to identify eye movement metrics using raw eye tracking data",
    authors: "Akshay, S., Megha, Y.J., Shetty, C.B.",
    venue: "Proceedings of the 3rd International Conference on Smart Systems and Inventive Technology, ICSSIT 2020",
    year: "2020",
    type: "Conference",
  },
  {
    title: "Satellite Image Classification for Detecting Unused Landscape using CNN",
    authors: "Akshay, S., Mytravarun, T.K., Manohar, N., Pranav, M.A.",
    venue: "Proceedings of the International Conference on Electronics and Sustainable Communication Systems, ICESC 2020",
    year: "2020",
    type: "Conference",
  },
  {
    title: "Symbolic Representation of Speech for Text Independent Speaker Recognition",
    authors: "Akshay, S., Apoorva, P.",
    venue: "",
    year: "",
    type: "",
  },
  {
    title: "Segmentation and classification of fruit images independent of image orientation using height width vectors",
    authors: "Akshitha Raj, R., Gopika, M., Apoorva, P., Akshay, S.",
    venue: "International Journal of Innovative Technology and Exploring Engineering",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Facial expression recognition using compressed images",
    authors: "Akshay, S., Mandara, S., Rao, A.G.",
    venue: "International Journal of Recent Technology and Engineering",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Cancer cell detection using FMM compressed images",
    authors: "Bhargavi, A.G., Nandini, H.N., Akshay, S.",
    venue: "International Journal of Recent Technology and Engineering",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Visual search capability using heatmaps",
    authors: "Akshay, S., Rames, A., Ashika, P.",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Handwritten english character recognition and speech synthesis to aid text-to-speech applications",
    authors: "Akshay, S., Chandana, J.R., Namita, G.",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Identification of parkinson disease patients classification using feed forward technique based on speech signals",
    authors: "Akshay, S., Vincent, K.",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
  },
  {
    title: "IoT based human search and rescue robot using swarm robotics",
    authors: "Machaiah, M.D., Akshay, S.",
    venue: "International Journal of Engineering and Advanced Technology",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Image plagiarism detection using compressed images",
    authors: "Akshay, S., Chaitanya, B.N., Kumar, R.",
    venue: "International Journal of Innovative Technology and Exploring Engineering",
    year: "2019",
    type: "Journal",
  },
  {
    title: "An R based interface to understand cognitive ability of different participants using fixation and saccade detection",
    authors: "Akshay, S., Ashika, P., Ramesh, A.",
    venue: "International Journal of Research in Pharmaceutical Sciences",
    year: "2019",
    type: "Journal",
  },
  {
    title: "Comparative analysis of heat maps over voronoi diagram in eye gaze data visualization",
    authors: "Akshay, S., Akash, M.R., Krishnan, G.S.A.",
    venue: "Proceedings of 2017 International Conference on Intelligent Computing and Control, I2C2 2017",
    year: "2018",
    type: "Conference",
  },
  {
    title: "Analysis of spatial eye gaze data for aiding gender identification",
    authors: "Akshay, S., Lakshmipriya, V.P., Sikha, S.",
    venue: "Proceedings of 2017 International Conference on Intelligent Computing and Control, I2C2 2017",
    year: "2018",
    type: "Conference",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "Akshay, S, Das KT, Hrithik, Prakash, Manu",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Segmentation and classification of FMM compressed retinal images using watershed and canny segmentation and support vector machine",
    authors: "Akshay, S., Apoorva, P.",
    venue: "Proceedings of the 2017 IEEE International Conference on Communication and Signal Processing, ICCSP 2017",
    year: "2018",
    type: "Conference",
  },
  {
    title: "Bandwidth optimized multicast routing algorithm based on hybrid mesh and tree structure with collision control in MANET using Lempel-Ziv-Oberhumer method",
    authors: "Akshay, S., Apoorva, P.",
    venue: "Proceedings of the 2017 IEEE International Conference on Communication and Signal Processing, ICCSP 2017",
    year: "2018",
    type: "Conference",
  },
  {
    title: "Vector quantization based algorithm to calculate fixation from raw eye tracking data",
    authors: "Akshay, S., Adarsh, M.",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Analysis of variations in pupil diameter through eye tracking during various visual search",
    authors: "Akshay, S., Anitha, H.",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Saccade calculation algorithm based on vector quantized fixation",
    authors: "Akshay, S., Ashin, V.P.",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Eye segmentation using viola-jones algorithm on FMM compressed images for aiding eye gaze analysis",
    authors: "Akshay, S., Harshitha, A.P.",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Traffic sign board detection using canny edge detection for compressed images",
    authors: "Akshay, S., Rahul, A., Yashwanth Brahma, B.M.",
    venue: "Journal of Advanced Research in Dynamical and Control Systems",
    year: "2018",
    type: "Journal",
  },
  {
    title: "Control of the home appliances using mobile telephony",
    authors: "Akshay, S., Arun, K., Sunu, P.B.",
    venue: "International Journal of Applied Engineering Research",
    year: "2016",
    type: "Journal",
  },
  {
    title: "Improved multiple object detection and tracking using KF-OF method",
    authors: "Akshay, S., Thomas, S., Ram Prashanth, A.",
    venue: "International Journal of Engineering and Technology",
    year: "2016",
    type: "Journal",
  },
  {
    title: "Single moving object detection and tracking using Horn-Schunck optical flow method",
    authors: "Akshay, S.",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
  },
  {
    title: "A survey on classification and clustering algorithms for uncompressed and compressed text",
    authors: "Akshay, S., Nayana, K., Karthika, S.",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
  },
  {
    title: "Control of the locomotion of temperature sensor",
    authors: "Malvika Devaiah, M., Sandhya, K.S., Akshay, S.",
    venue: "International Journal of Applied Engineering Research",
    year: "2015",
    type: "Journal",
  },
  {
    title: "Symbolic Representation of Speech for Text Independent Speaker Recognition",
    authors: "Akshay, S., Apoorva, P.",
    venue: "International Journal of Science and Research (IJSR)",
    year: "2014",
    type: "Journal",
  },
  {
    title: "Security Measures on Mobile Technology Using Software as a Service (SaaS)",
    authors: "Apoorva, P., Akshay, S.",
    venue: "International Journal of Science and Research (IJSR)",
    year: "2014",
    type: "Journal",
  },
  {
    title: "Resource Planning Using Agile Methodology -Corporate Case Study",
    authors: "Jithin, Raju., Akshay, S.",
    venue: "INTERNATIONAL JOURNAL OF INNOVATIVE TRENDS IN ENGINEERING (IJITE)",
    year: "2015",
    type: "Journal",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "Akshay, S, Vasanth, Poojitha",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Classification of Satellite Images",
    authors: "Manohar, N., Pranav, M. A., Akshay, S., Mytravarun, T. K.",
    venue: "Information and Communication Technology for Intelligent Systems",
    year: "2021",
    type: "",
  },
  {
    title: "Effective Utilization of Shared Nearest Node for Message Diffusion in Social Network Using Dbscan",
    authors: "Apoorva, P, Akshay, S, Priyanka, R, Nayana, N",
    venue: "International Journal of Engineering & Technology",
    year: "2018",
    type: "",
  },
  {
    title: "Energy and Performance Analysis of Raspberry Pi with Modern Computing Devices",
    authors: "Akshay, S, Vishnukumar, B, Mohan, Vimal, Anand, MS",
    venue: "International Journal of Engineering & Technology",
    year: "2018",
    type: "",
  },
  {
    title: "Analysis of spatial eye gaze data for aiding gender identification",
    authors: "Akshay, S, Lakshmipriya, V P, Sikha, S",
    venue: "2017 International Conference on Intelligent Computing and Control (I2C2)",
    year: "2017",
    type: "Conference",
  },
  {
    title: "iAOI: An Eye Movement Based Deep Learning Model to Identify Areas of Interest",
    authors: "Akshay, S, Amudha, J, Narmada, Nakka, Bhattacharya, Amitabh, Kamble, Nitish, Pal, Pramod Kumar",
    venue: "International Conference on Multi-disciplinary Trends in Artificial Intelligence",
    year: "2023",
    type: "Conference",
  },
  {
    title: "iSTIMULI: Prescriptive Stimulus Design for Eye Movement Analysis of Patients with Parkinson’s Disease",
    authors: "Akshay, S, Amudha, J, Kulkarni, Nilima, Prashanth, LK",
    venue: "International Conference on Multi-disciplinary Trends in Artificial Intelligence",
    year: "2023",
    type: "Conference",
  },
  {
    title: "iAlert: An Alert System based on Eye Gaze for Human Assistance",
    authors: "Akshay, S, Dhanush, S, Rao, Sujayeendra",
    venue: "2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal impact using Marketing, Entrepreneurship and Talent (TEMSMET)",
    year: "2023",
    type: "Conference",
  },
  {
    title: "An Eye Movement Based Patient Assistance System",
    authors: "Akshay,S, Venkatesh, K",
    venue: "2022 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "UEye: Insights on User Interface Design Using Eye Movement Visualizations",
    authors: "Akshay, S, Shukla, Anupam, Raman, Vishnu K",
    venue: "International Conference on Advances in Computing and Data Sciences",
    year: "2023",
    type: "Conference",
  },
  {
    title: "Exploring Eye Gaze Patterns in Three Dimensions: An Innovative Visualization Dashboard",
    authors: "Akshay, S, V, Yashwanth M, N, Manohar, Jipeng, Tian, J, Amudha",
    venue: "2024 IEEE International Conference on Contemporary Computing and Communications (InC4)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Object Detection Using Thermal Imaging",
    authors: "Akshay, S, Neelakandan, Shukoh, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Classification of Skin Lesions using Five Modulus Method for image compression",
    authors: "Akshay, S, Vinod, Akshara P, M A, Anusree, K, Chandru, H P, Abhishek, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Multi-Modal AI-Based Framework for PCOD Detection and Risk Assessment: Addressing a Growing Health Crisis in India",
    authors: "Akshay, S, Nath, Adithya G, A R, Varsha, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Enhancing Skin Cancer Detection: Leveraging Deep Learning and Ensemble Learning Techniques for Improved Diagnostics",
    authors: "S, Akshay, Hegde, Abhishek Ramakrishna, N, Manoj Kumar, P, Kavya Bijith, V, Anirudh Samaga, R, Akshay",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference",
  },
  {
    title: "Analyzing the Impact of Mental Health on Academic Performance: AI Approach Based on Student Feedback",
    authors: "V, Sumukh, C, Nithesh Dalwai, Kashyap, Sindhu R, S, Akshay",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference",
  },
  {
    title: "Optimizing Identification of Local Medical Services Using Whale Optimization Algorithm",
    authors: "S, Akshay, P, Abhinand K, Sajikumar, Athul, K, Sreenath, S, Hariram J",
    venue: "2025 Third International Conference on Networks, Multimedia and Information Technology (NMITCON)",
    year: "2025",
    type: "Conference",
  },
  {
    title: "Measuring Image Quality: Crucial Indicators for Evaluating Camera-Captured Document Contents",
    authors: "D., Shrunga, S., Akshay, S., Koushik K.",
    venue: "2025 12th International Conference on Computing for Sustainable Global Development (INDIACom)",
    year: "2025",
    type: "Conference",
  },
  {
    title: "An Approach to Estimate the Measurement for Water Bodies in Satellite Images",
    authors: "S, Akshay, Dasari, Anudeep, Kumar, Manoj",
    venue: "2024 International Conference on Recent Innovation in Smart and Sustainable Technology (ICRISST)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Modelling and Simulation of Fiber Bragg Grating Sensors for Temperature and Pressure Measurements in Environmental Monitoring Stations",
    authors: "K, Chethana, S, Malathi., S, Akshay, K, Swetha",
    venue: "2024 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Object Detection Using Thermal Imaging",
    authors: "S, Akshay, Neelakandan, Shukoh, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Multi-Modal AI-Based Framework for PCOD Detection and Risk Assessment: Addressing a Growing Health Crisis in India",
    authors: "S, Akshay, Nath, Adithya G, A R, Varsha, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Classification of Skin Lesions using Five Modulus Method for image compression",
    authors: "S, Akshay, Vinod, Akshara P, M A, Anusree, K, Chandru, H P, Abhishek, Nath, Aswin G",
    venue: "2024 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Exploring Eye Gaze Patterns in Three Dimensions: An Innovative Visualization Dashboard",
    authors: "S, Akshay, V, Yashwanth M, N, Manohar, Jipeng, Tian, J, Amudha",
    venue: "2024 IEEE International Conference on Contemporary Computing and Communications (InC4)",
    year: "2024",
    type: "Conference",
  },
  {
    title: "Categorizing Participants Based on Their Reaction Time Using Eye Tracking",
    authors: "S, Akshay, Pradeep, Pranav Sai",
    venue: "2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)",
    year: "2023",
    type: "Conference",
  },
  {
    title: "FAST RCNN-Based Implementation of Cloudi: Converting Raw Eye Gaze Data into Usable Format",
    authors: "S, Akshay, Bharadwaja, Pradyumna J",
    venue: "2023 IEEE International Conference on Cloud Computing in Emerging Markets (CCEM)",
    year: "2023",
    type: "Conference",
  },
  {
    title: "iAlert: An Alert System based on Eye Gaze for Human Assistance",
    authors: "Akshay, S, Dhanush, S, Rao, Sujayeendra",
    venue: "2023 IEEE 3rd International Conference on Technology, Engineering, Management for Societal impact using Marketing, Entrepreneurship and Talent (TEMSMET)",
    year: "2023",
    type: "Conference",
  },
  {
    title: "An Eye Movement Based Patient Assistance System",
    authors: "S, Akshay, K, Venkatesh",
    venue: "2022 IEEE North Karnataka Subsection Flagship International Conference (NKCon)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Eye Detection from Face Images covered in Face-masks using HAAR features",
    authors: "Akshay, S, Prakash, Manu, Hrithik Das, KT",
    venue: "2022 IEEE 7th International Conference on Recent Advances and Innovations in Engineering (ICRAIE)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "E-commerce Website User Engagement Analysis: An Eye Tracking Viewpoint",
    authors: "S, Akshay, R, Nishanth",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "ABC: A Deep learning Iris Recogniser for Secure Borders and Automated Border Crossing",
    authors: "S, Akshay, Das Kt, Hrithik, Prakash, Manu",
    venue: "2022 IEEE 2nd Mysore Sub Section International Conference (MysuruCon)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "A CNN based model for Identification of the Level of Participation in Virtual Classrooms using Eye Movement Features",
    authors: "Akshay, S, Vasanth, Poojitha",
    venue: "2022 IEEE International Conference on Electronics, Computing and Communication Technologies (CONECCT)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Categorization of Fruit images using Artificial Bee Colony Algorithm based on GLCM features",
    authors: "S, Akshay, M A, Deepika Shetty",
    venue: "2022 International Conference on Electronic Systems and Intelligent Computing (ICESIC)",
    year: "2022",
    type: "Conference",
  },
  {
    title: "Classification of Beneficial and non-Beneficial Bacteria using Random Forest Algorithm",
    authors: "S, Akshay, M, Jeevan Urs",
    venue: "2021 Third International Conference on Inventive Research in Computing Applications (ICIRCA)",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Drowsy Driver Detection using Eye-Tracking through Machine Learning",
    authors: "S, Akshay, MB, Abhishek, D, Sudhanshu, C, Anuvaishnav",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Face Matching in Indian Citizens using CNN",
    authors: "S, Akshay, Joshi, Shreya R",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Detection and classification of areca nut diseases",
    authors: "S, Akshay, Hegde, Ashwini",
    venue: "2021 Second International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2021",
    type: "Conference",
  },
  {
    title: "Machine Learning Algorithm to Identify Eye Movement Metrics using Raw Eye Tracking Data",
    authors: "Akshay, S, Megha, Y J, Shetty, Chethan Babu",
    venue: "2020 Third International Conference on Smart Systems and Inventive Technology (ICSSIT)",
    year: "2020",
    type: "Conference",
  },
  {
    title: "Satellite Image Classification for Detecting Unused Landscape using CNN",
    authors: "Akshay, S., Mytravarun, T. K., Manohar, N., Pranav, M. A.",
    venue: "2020 International Conference on Electronics and Sustainable Communication Systems (ICESC)",
    year: "2020",
    type: "Conference",
  },
  {
    title: "Actor-critic guided CDBN with GAN augmentation for robust facial emotion recognition",
    authors: "Akshay S, Jnana Sai {S R}, Sinchana {B R}, Kannan M, Adwitiya Mukhopadhyay",
    venue: "MethodsX",
    year: "2026",
    type: "Journal",
  },
  {
    title: "EyeMap: A fusion-based method for eye movement-based visual attention maps as predictive markers of parkinsonism",
    authors: "Akshay S, Amudha J, Amitabh Bhattacharya, Nitish Kamble, Pramod Kumar Pal",
    venue: "MethodsX",
    year: "2025",
    type: "Journal",
  },
  {
    title: "Hybrid Deep Learning and Machine Learning Framework for Automated Pneumonia Detection in Chest X-ray Images",
    authors: "Akshay S, Sneha Kashyap, Danikk {Patel H N}, Pavan {Kumar Y R}",
    venue: "MethodsX",
    year: "2025",
    type: "Journal",
  }
];

export default function PublicationsPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const types = ["All", ...Array.from(new Set(publications.map((p) => p.type)))];

  const filteredPublications = useMemo(() => {
    const query = search.toLowerCase().trim();

    return publications.filter((paper) => {
      const matchesFilter = filter === "All" || paper.type === filter;
      const matchesSearch =
        !query ||
        paper.title.toLowerCase().includes(query) ||
        paper.authors.toLowerCase().includes(query) ||
        paper.venue.toLowerCase().includes(query) ||
        paper.year.includes(query);

      return matchesFilter && matchesSearch;
    });
  }, [search, filter]);

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

          <h1 className="mt-8 text-5xl font-black">
            All Publications
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-slate-400">
            A complete list of my research publications in Artificial
            Intelligence, Computer Vision, Eye Tracking and Healthcare AI.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title, author, venue or year..."
            className="w-full rounded-2xl border border-white/10 bg-slate-900/80 px-6 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500/50"
          />

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  filter === type
                    ? "bg-blue-600 text-white"
                    : "border border-white/10 bg-slate-900 text-slate-300 hover:bg-slate-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-6">
          {filteredPublications.map((paper, index) => (
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
                    <span className="text-sm text-slate-500">
                      {paper.year}
                    </span>
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

        {filteredPublications.length === 0 && (
          <div className="mt-12 rounded-3xl border border-white/10 bg-slate-900/70 p-12 text-center text-slate-400">
            No publications found.
          </div>
        )}

        <p className="mt-10 text-center text-sm text-slate-500">
          Showing {filteredPublications.length} of {publications.length} publications
        </p>
      </div>
    </main>
  );
}
