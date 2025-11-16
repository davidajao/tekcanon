import React, { useState, useEffect, useMemo } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchValue, setSearchValue] = useState('');

  const faqs = [
    {
      question: 'Who is this for ?',
      answer:
        'Our programs are designed for students, career switchers, and job seekers in tech — anyone looking to build skills and launch their career.'
    },
    {
      question: 'How do I access my course',
      answer:
        'Once enrolled, access your course from the dashboard under "My Courses". All course materials and progress are saved to your account.'
    },
    {
      question: 'Are there prerequisites or language requirements?',
      answer:
        'Most courses require only a commitment to learn; some advanced tracks assume basic programming knowledge. English proficiency is recommended for most content.'
    }
  ];

  const filteredFaqs = useMemo(() => {
    const q = searchValue.trim().toLowerCase();
    if (!q) return faqs;
    return faqs.filter((f) => (f.question + ' ' + f.answer).toLowerCase().includes(q));
  }, [searchValue, faqs]);

  useEffect(() => {
    // close any open item when the search changes to avoid mismatched indices
    setOpenIndex(null);
  }, [searchValue]);
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="bold">Learn, Grow, </span>
              <span className="regular">and</span>
              <span className="bold"> Launch </span>
              <span className="regular">Your</span>
              <span className="bold"> Tech Career—</span>
              <span className="regular">with a Community that Cares.</span>
            </h1>
            <p className="hero-description">
              Gain the confidence, guidance, and real-world skills you need to land your dream role.
            </p>
            <Link to="/courses" className="hero-button">
              <span className="hero-button-text">Start Learning</span>
              <svg 
                className="hero-button-icon" 
                width="14" 
                height="14" 
                viewBox="0 0 14 14" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1.85693 12.1431L12.1426 1.85742M12.1426 1.85742H4.42836M12.1426 1.85742V9.57171" 
                  stroke="white" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="getting-started-section">
        <div className="getting-started-background"></div>
        <div className="getting-started-container">
          <div className="getting-started-header">
            <h2 className="getting-started-title">Getting Started is Simple</h2>
            <p className="getting-started-subtitle">
              Follow these steps to begin your journey toward a career in Tech
            </p>
          </div>

          <div className="steps-container">
            <div className="step-card">
              <div className="step-number-badge yellow">
                <span className="step-number">1</span>
              </div>
              <h3 className="step-title">Learn</h3>
              <p className="step-description">
                Start by exploring our free courses and resources
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-badge-wrapper">
                <svg className="step-circle cyan" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35" fill="#42EAF5"/>
                </svg>
                <span className="step-number-overlay">2</span>
              </div>
              <h3 className="step-title">Grow</h3>
              <p className="step-description">
                Join mentorship and career development programs
              </p>
            </div>

            <div className="step-card">
              <div className="step-number-badge-wrapper">
                <svg className="step-circle green" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="35.5" cy="35.5" r="35" fill="#87F4B5"/>
                </svg>
                <span className="step-number-overlay">3</span>
              </div>
              <h3 className="step-title">Launch</h3>
              <p className="step-description">
                Apply your skills and take the next step toward a tech career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section (overlapping) */}
      <section className="mission-section">
        <div className="mission-box">
          <div className="mission-header">
            <h3 className="mission-title">Our Mission</h3>
          </div>
          <div className="mission-content">
            <p className="mission-text">
              TekCanon empowers students to land high-impact, high-paying roles in tech through education, exposure, and intentional career growth.<br/>
              We believe talent is universal, but opportunity is not. TekCanon bridges that gap by equipping students with the skills, mentorship, and insights needed to thrive in the tech industry.
            </p>
          </div>
        </div>
      </section>

      {/* Together For Change Section */}
      <section className="together-section">
        <h2 className="together-title">
          Together For Change: Our Mission Is To Make A Difference
        </h2>
      </section>

      {/* Who we Serve Section */}
      <section className="who-we-serve-section">
        <div className="who-we-serve-container">
          <div className="who-we-serve-header">
            <h2 className="who-we-serve-title">Who we Serve</h2>
            <p className="who-we-serve-description">
              TekCanon serves students and early-career professionals—especially those from underrepresented backgrounds—who aspire to build meaningful, high-paying careers in technology. We support driven learners seeking guidance, mentorship, and access to the networks and knowledge that open doors to top opportunities in tech.
            </p>
          </div>

          <div className="audience-grid">
            <div className="audience-card">
              <div className="audience-icon-wrapper">
                <svg className="icon-background yellow" width="74" height="79" viewBox="0 0 74 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.2347 4.82657C20.5194 2.36987 22.8165 -0.225121 28.7336 1.3182C39.2441 4.05955 57.914 8.92906 66.6154 14.9513C75.3168 20.9735 73.4839 28.0009 72.3412 31.9575C70.5504 38.1576 67.9801 40.5567 65.5346 43.0598C62.8563 45.8014 59.5443 48.0343 56.5153 49.3383C53.4863 50.6422 50.3423 52.426 47.2482 53.9796C44.1578 55.5314 39.801 58.5545 35.9391 61.7391C30.4005 66.3064 26.9412 67.4977 23.8471 69.0513C20.8744 70.544 17.8005 71.6544 14.7715 72.9583L5.69593 76.8654C4.18711 77.5149 2.60374 78.4117 1.26089 78.8496C0.720529 79.0258 0.504704 77.8877 2.66396 68.7338C4.82322 59.5799 9.37383 42.1327 11.3348 32.9153C14.1774 19.554 15.2149 11.1405 16.8528 8.29726C17.5899 7.01776 18.3535 5.77685 19.2347 4.82657Z" fill="#F0F9A7"/>
                </svg>
                <svg className="audience-icon" width="86" height="85" viewBox="0 0 86 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50.0271 39.3984C42.6139 47.4568 37.2171 43.5267 32.1586 35.7903C29.5709 31.8324 28.8091 29.4983 30.732 24.6962C29.5947 24.0722 29.5343 22.9709 29.5321 21.7893L29.5643 20.0977C29.2357 19.9049 28.8617 19.7927 28.5064 19.6584L26.3773 18.8759C25.1795 18.4196 24.4044 18.0444 25.3825 16.7849C26.0287 15.9531 27.0003 15.7571 27.9449 15.4241L39.3617 11.3449C40.1975 11.0443 41.0313 10.7514 41.9161 10.6404C43.3229 10.4952 44.7928 11.2958 46.0749 11.7648L56.6696 15.3892C57.5442 15.6704 58.4644 15.8761 59.3221 16.1985C60.4805 16.6339 60.841 17.8778 59.5807 18.4198C59.0626 18.6426 59.1557 18.6103 59.1509 19.1562L59.1495 22.7357C59.1534 23.2866 59.0718 23.2363 59.4375 23.6096C59.8919 24.073 60.2256 24.6731 60.484 25.2638C62.1253 29.0176 52.4461 28.3998 57.2063 23.446C57.4653 23.1765 57.3165 22.3148 57.3181 21.9659L57.3084 19.2952C56.7563 19.4046 56.1604 19.4947 55.6359 19.7019C55.5395 20.6755 55.8058 22.3621 55.561 23.197C55.3186 24.024 54.3167 24.3623 53.6303 24.7377C54.5932 29.6807 55.0231 30.5581 52.8326 35.0784C52.013 36.7696 51.3125 37.9825 50.0271 39.3984ZM42.0453 12.4186C41.3405 12.5307 40.6335 12.8395 39.9608 13.0759L27.7891 17.4526L40.1294 21.7878C40.971 22.1023 41.7974 22.6465 42.7018 22.3427L56.9529 17.3773C56.1096 17.046 55.208 16.8018 54.3451 16.5212L42.9722 12.6098C42.6773 12.5174 42.3572 12.4206 42.0453 12.4186ZM53.7057 20.3164L44.1953 23.7055C43.2982 24.0997 42.5434 24.6409 41.5539 24.2955L33.065 21.2377C32.4941 21.0345 31.878 20.8422 31.332 20.5835L31.3167 21.289C31.3166 21.8265 31.253 22.4668 31.3599 22.9897C38.0161 25.5954 47.0809 25.6697 53.6541 22.7957L53.7423 22.7564C53.8035 22.5111 53.7682 22.1875 53.7688 21.9326L53.7057 20.3164ZM58.0475 25.0893C57.5564 25.6658 57.8634 25.8061 58.4608 25.8482L58.702 25.7949C58.76 25.4946 58.425 25.1314 58.1511 25.0654L58.0475 25.0893ZM32.4227 25.2978C30.8731 29.7753 31.2444 31.2602 33.8706 35.1136C36.0191 38.266 40.059 43.7091 44.3462 41.5721C45.9928 40.7513 47.6782 39.3823 48.8597 37.975C50.5355 36.0568 52.0897 33.1186 52.4995 30.6574C52.7945 28.8857 52.3868 27.0735 51.8408 25.394L48.8135 26.1207C47.4545 26.3865 46.0061 26.5974 44.6194 26.6861L41.8825 26.7343C38.4667 26.7297 35.7472 26.1858 32.4227 25.2978Z" fill="black"/>
                  <path d="M56.9475 70.6178L47.1663 72.7175C45.6378 72.9323 44.1487 72.9657 42.6101 72.965L40.1651 72.9326C37.8198 72.7948 35.4933 72.4509 33.1832 72.0332L27.5583 70.846C23.7202 69.883 17.086 68.1031 16.488 63.3008C16.2197 61.1466 16.7082 58.7925 17.2445 56.715C18.8081 50.6586 22.201 47.9162 27.5044 45.3529L29.3271 44.4498C29.9758 44.1142 30.2134 43.9908 30.658 43.4322C31.2696 42.6637 32.011 42.3737 32.9636 42.2675C39.1532 41.938 40.5641 55.0061 46.171 46.7691L47.3406 45.1088C48.6032 43.4628 50.6754 41.7691 52.9052 42.3051L52.9823 42.325C53.8157 42.5329 54.8345 43.2051 54.9136 44.1406L54.9168 44.1897C55.9135 44.4899 56.8736 44.934 57.8022 45.4012C63.3831 48.2088 66.6041 51.1431 67.9828 57.3333L68.4343 59.8979C68.5218 60.3518 68.5298 60.8396 68.5405 61.3016C68.6502 66.0329 66.0253 67.5006 61.8918 69.0002L56.9475 70.6178ZM33.0854 44.0928C32.7663 44.1297 32.486 44.1843 32.1866 44.3093C33.8458 47.6665 38.409 52.087 41.243 54.3451L42.7699 55.4777C46.0611 54.0945 49.3858 50.272 51.2749 47.3999L52.2418 45.8324C52.56 45.3003 52.8611 44.7976 53.0154 44.1912C48.7098 43.2881 48.0353 49.6149 44.2535 51.027C38.9053 53.0239 36.5328 43.6055 33.0854 44.0928ZM30.8946 45.841C29.546 46.3684 28.2326 46.9881 26.954 47.6669C21.9362 50.3306 19.7165 53.1511 18.5718 58.9562L18.3029 60.585C18.2319 60.9584 18.2398 61.3636 18.237 61.7428C18.2168 64.4228 19.2955 65.7089 21.7452 66.968C27.0977 69.7191 38.7961 71.4887 44.8691 71.1705C49.5567 70.9247 57.4629 68.808 61.7158 67.1538C64.7214 65.943 66.7736 65.0192 66.7278 61.4984C66.6874 58.3977 65.6116 54.3047 63.6974 51.9271C61.7723 49.5361 58.2061 47.4709 55.4258 46.2895L54.2472 45.8217C52.1092 50.1448 49.1402 53.6647 45.0982 56.2632L43.8537 57.0383C42.4158 57.9086 42.1666 57.2664 40.8937 56.3358C37.9603 54.1912 35.2078 51.4977 32.9522 48.6375L31.2253 46.1852C31.1133 46.0175 31.1013 45.8706 30.8946 45.841Z" fill="black"/>
                  <path d="M57.7877 64.8018L57.7445 64.81C56.8159 64.9478 56.8361 64.6557 56.5056 63.9992C56.1172 63.2276 53.4961 61.5332 52.7075 60.9647C51.5909 60.16 52.842 59.1759 53.564 58.666C54.7973 57.7947 55.9796 57.2752 57.4928 57.1689C59.192 57.0736 60.5362 57.8662 61.8928 58.7845C64.0034 60.2131 62.565 60.7933 61.2023 61.7681L58.885 63.5389C58.4357 63.9154 58.331 64.5791 57.7877 64.8018ZM57.3207 58.9903C56.342 59.1243 55.4548 59.5307 54.65 60.0933L56.2901 61.2752C56.7162 61.5935 57.1567 61.9137 57.5275 62.2964C57.6298 62.2373 57.7097 62.1564 57.7951 62.0761L60.53 60.0506C59.4953 59.3811 58.5824 58.9375 57.3207 58.9903Z" fill="black"/>
                </svg>
              </div>
              <h3 className="audience-title">Students & Graduates</h3>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrapper">
                <svg className="icon-background purple" width="109" height="148" viewBox="0 0 109 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M56.0229 8.50439C58.2563 6.86191 61.4599 5.53993 66.0974 9.52594C74.3348 16.6062 88.9671 29.1829 94.138 38.4156C99.3089 47.6483 94.575 53.1559 91.8102 56.2082C87.4776 60.9912 84.1146 62.0171 80.8181 63.1914C77.2076 64.4775 73.2513 65.0283 69.9575 64.8689C66.6636 64.7096 63.0556 64.9307 59.5935 64.967C56.1356 65.0033 50.8937 65.805 46.0253 66.9691C39.0433 68.6387 35.4123 68.1891 31.9503 68.2254C28.624 68.2603 25.3748 67.9073 22.0809 67.748L12.2116 67.2705C10.5709 67.1912 8.75451 67.3011 7.35579 67.1046C6.79295 67.0255 7.09908 65.9083 13.0604 58.6337C19.0217 51.3592 30.7748 37.6851 36.5859 30.2665C45.0095 19.5126 49.638 12.4103 52.3584 10.5758C53.5827 9.75016 54.8138 8.9709 56.0229 8.50439Z" fill="#A54DB5" fillOpacity="0.58"/>
                </svg>
                <svg className="audience-icon briefcase" width="109" height="148" viewBox="0 0 109 148" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M94.9139 30.3262H76.0154C75.663 30.3262 75.3759 30.6133 75.3759 30.9657V43.0253L61.972 43.0905C61.6196 43.0905 61.3325 43.3777 61.3325 43.73V52.9183H47.4979C47.1455 52.9183 46.8584 53.2054 46.8584 53.5578V59.94H24.7753C24.4229 59.94 24.1357 60.2271 24.1357 60.5795V70.094C24.1357 70.4464 24.4229 70.7336 24.7753 70.7336H94.9139C95.2663 70.7336 95.5534 70.4464 95.5534 70.094V30.9787C95.5534 30.6264 95.2663 30.3262 94.9139 30.3262ZM94.2744 69.4545H25.4148V61.2321H47.4979C47.8503 61.2321 48.1374 60.9449 48.1374 60.5926V54.2104H61.985C62.3374 54.2104 62.6246 53.9232 62.6246 53.5709V44.3826L76.0284 44.3174C76.3808 44.3174 76.6679 44.0302 76.6679 43.6778V31.6183H94.2744V69.4545Z" fill="black"/>
                  <path d="M63.0161 24.5446H64.8302V38.34C64.8302 38.6924 65.1173 38.9795 65.4697 38.9795H71.4082C71.7606 38.9795 72.0477 38.6924 72.0477 38.34V24.5446L73.8618 24.5577C73.8618 24.5577 73.8618 24.5577 73.8749 24.5577C74.3447 24.5577 74.7493 24.2966 74.9451 23.8659C75.1409 23.4352 75.0626 22.9523 74.7493 22.613L69.2286 16.5049C69.0197 16.27 68.7196 16.1395 68.3933 16.1395C68.08 16.1395 67.7668 16.283 67.558 16.5179L62.1416 22.613C61.8284 22.9654 61.7631 23.4352 61.9458 23.8659C62.1416 24.2836 62.5593 24.5446 63.0161 24.5446ZM68.3933 17.4968L73.6139 23.2656L71.4212 23.2525C71.2385 23.2525 71.0819 23.3178 70.9644 23.4352C70.8469 23.5527 70.7686 23.7224 70.7686 23.892V37.6874H66.1223V23.9051C66.1223 23.5527 65.8352 23.2656 65.4828 23.2656H63.2901L68.3933 17.4968ZM47.9547 36.7347H49.7688V50.5301C49.7688 50.8825 50.0559 51.1696 50.4083 51.1696H56.3468C56.6991 51.1696 56.9863 50.8825 56.9863 50.5301V36.7477L58.8004 36.7608C58.8004 36.7608 58.8004 36.7608 58.8135 36.7608C59.2833 36.7608 59.6879 36.4998 59.8707 36.0691C60.0664 35.6514 59.9881 35.1555 59.6749 34.8031L54.1541 28.695C53.9453 28.46 53.6451 28.3295 53.3188 28.3295C53.0056 28.3295 52.7054 28.4731 52.4835 28.708L47.0672 34.8031C46.7539 35.1555 46.6887 35.6253 46.8714 36.056C47.0802 36.4737 47.4848 36.7347 47.9547 36.7347ZM53.3188 29.6999L58.5394 35.4687L56.3468 35.4556C56.1771 35.4556 56.0205 35.5209 55.8899 35.6384C55.7725 35.7558 55.6942 35.9255 55.6942 36.0952V49.8906H51.0479V36.0952C51.0479 35.7428 50.7607 35.4556 50.4083 35.4556H48.2157L53.3188 29.6999ZM79.996 9.39184H81.8102V26.3327C81.8102 26.685 82.0973 26.9722 82.4497 26.9722H88.3881C88.7405 26.9722 89.0277 26.685 89.0277 26.3327V9.39184L90.8418 9.40489C91.3508 9.36573 91.7163 9.14386 91.912 8.71316C92.1078 8.28246 92.0295 7.79956 91.7163 7.44717L86.1955 1.33907C85.9867 1.10415 85.6865 0.973633 85.3602 0.973633C85.0339 1.01279 84.7337 1.10415 84.5249 1.35213L79.1085 7.44717C78.7953 7.79956 78.73 8.26941 78.9128 8.70011C79.1216 9.13081 79.5262 9.39184 79.996 9.39184ZM85.3602 2.34404L90.5808 8.11279L88.3881 8.09974C88.2185 8.09974 88.0619 8.165 87.9313 8.28246C87.8139 8.39992 87.7356 8.56959 87.7356 8.73926V25.6801H83.0892V8.75231C83.0892 8.39992 82.8021 8.11279 82.4497 8.11279H80.2571L85.3602 2.34404ZM44.235 55.0068V45.675C44.235 45.6619 44.235 45.6358 44.235 45.6227V37.2959C44.235 35.6123 42.8646 34.2549 41.194 34.2549H35.5166L33.9896 29.8696C33.7807 29.3084 33.2456 28.943 32.6453 28.943H23.2482C22.6348 28.943 22.1127 29.3345 21.8908 29.9479L20.5204 34.268H15.0649C13.3943 34.268 12.037 35.6384 12.037 37.309V45.5966C12.037 45.6097 12.0239 45.6227 12.0239 45.6358V55.0068C12.0239 55.9987 12.8331 56.8079 13.825 56.8079H42.4339C43.4258 56.8079 44.235 55.9987 44.235 55.0068ZM23.2482 30.222H32.6322C32.7236 30.222 32.7627 30.2873 32.7627 30.3003L33.2065 31.5663H22.7261L23.1177 30.3395C23.1307 30.2873 23.1829 30.222 23.2482 30.222ZM22.3215 32.8584H33.6633L34.1592 34.2549H21.8778L22.3215 32.8584ZM13.316 37.2959C13.316 36.3301 14.0991 35.534 15.0649 35.534H41.194C42.1598 35.534 42.9559 36.317 42.9559 37.2959V45.5966C42.9559 45.6097 42.9559 45.6097 42.9559 45.6227V45.6358C42.9429 46.5886 42.1989 47.3455 41.194 47.3716H33.4675V44.6047C33.4675 42.8819 32.071 41.4854 30.3482 41.4854H25.9107C24.1879 41.4854 22.7914 42.8819 22.7914 44.6047V47.3716H15.0649C14.0991 47.3716 13.316 46.5886 13.316 45.6097V37.2959ZM26.4197 53.2579V48.0112C26.4197 47.9851 26.4328 47.959 26.4328 47.9329V45.0876H29.8131V47.9329V53.2579H26.4197ZM15.7044 53.2579V48.6768H22.948C23.2351 49.3163 23.8616 49.7601 24.6056 49.7601C24.7883 49.7601 24.9579 49.7209 25.1276 49.6687V53.2579H15.7044ZM32.1885 47.9329C32.1885 48.233 31.9535 48.468 31.6142 48.468C31.314 48.468 31.0791 48.233 31.0791 47.9329V44.4481C31.0791 44.0957 30.792 43.8086 30.4396 43.8086H25.7802C25.4278 43.8086 25.1407 44.0957 25.1407 44.4481V47.8937C25.1407 47.9068 25.1276 47.9198 25.1276 47.9329V47.972C25.1015 48.2461 24.8796 48.468 24.6056 48.468C24.3184 48.468 24.0704 48.233 24.0704 47.9329V44.6178C24.0704 43.5998 24.8927 42.7775 25.9107 42.7775H30.3482C31.3662 42.7775 32.1885 43.5998 32.1885 44.6178V47.9329ZM31.0791 49.6557C31.2618 49.7079 31.4445 49.747 31.6534 49.747C32.3973 49.747 33.0238 49.3033 33.3109 48.6637H40.6197V53.2448H31.0921V49.6557H31.0791ZM13.303 55.0068V48.1025C13.6293 48.3375 14.0078 48.5071 14.4123 48.5985V53.8974C14.4123 54.2498 14.6995 54.5369 15.0519 54.5369H25.741C25.7541 54.5369 25.7541 54.5369 25.7541 54.5369H25.7671H41.2592C41.6116 54.5369 41.8988 54.2498 41.8988 53.8974V48.5854C42.2773 48.4941 42.6427 48.3375 42.9429 48.1156V54.9937C42.9429 55.2808 42.708 55.5027 42.4339 55.5027H13.825C13.5379 55.5158 13.303 55.2939 13.303 55.0068Z" fill="black"/>
                </svg>
              </div>
              <h3 className="audience-title">Career Switchers</h3>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrapper">
                <svg className="icon-background cyan" width="89" height="62" viewBox="0 0 89 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M72.8993 1.19911C75.6672 1.04167 79.073 1.68222 80.7837 7.5532C83.8223 17.9816 89.2198 36.5058 88.5141 47.0644C87.8084 57.6229 80.8358 59.6545 76.8533 60.7033C70.6125 62.3468 67.2346 61.3711 63.8314 60.556C60.1041 59.6633 56.4884 57.9657 53.8152 56.0346C51.1421 54.1035 47.9981 52.3197 45.0772 50.4607C42.1598 48.604 37.3298 46.415 32.615 44.7336C25.8532 42.3223 23.0561 39.964 20.1352 38.105C17.329 36.319 14.7989 34.2499 12.1258 32.3188L4.1163 26.5326C2.78473 25.5707 1.20272 24.6715 0.137922 23.7435C-0.290553 23.3701 0.575686 22.601 9.54101 19.7586C18.5063 16.9163 35.8174 11.8722 44.7355 8.82711C57.663 4.41297 65.4174 0.987543 68.6982 0.934941C70.1746 0.911269 71.6315 0.930161 72.8993 1.19911Z" fill="#42EAF5"/>
                </svg>
                <svg className="audience-icon search" width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M32.7414 14.3881C38.9531 8.17623 49.0244 8.17606 55.2363 14.3877C61.4482 20.5994 61.4483 30.6707 55.2367 36.8826C49.025 43.0944 38.9537 43.0946 32.7418 36.883C26.5299 30.6713 26.5298 20.6 32.7414 14.3881Z" fill="white" stroke="black"/>
                  <path d="M30.1348 44.9697L15.0205 60.084C13.5074 61.5971 11.0542 61.5971 9.54102 60.084C8.02785 58.5708 8.02786 56.1177 9.54102 54.6045L24.6553 39.4902L30.1348 44.9697Z" fill="white" stroke="black"/>
                  <path d="M33.9363 38.7821L30.8428 35.6885L26.2023 40.3288L29.2958 43.4224L33.9363 38.7821Z" fill="white"/>
                  <path d="M30.8415 35.6896L26.2012 40.3301L27.6088 41.7376L32.2491 37.0972L30.8415 35.6896Z" fill="white"/>
                </svg>
              </div>
              <h3 className="audience-title">Job Seekers in Tech</h3>
            </div>

            <div className="audience-card">
              <div className="audience-icon-wrapper">
                <svg className="icon-background green" width="90" height="62" viewBox="0 0 90 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M73.3983 1.02235C76.1662 0.864914 79.5721 1.50546 81.2827 7.37644C84.3213 17.8049 89.7188 36.329 89.0131 46.8876C88.3074 57.4462 81.3349 59.4778 77.3523 60.5266C71.1115 62.17 67.7336 61.1943 64.3304 60.3793C60.6031 59.4866 56.9874 57.789 54.3142 55.8579C51.6411 53.9267 48.4971 52.1429 45.5762 50.284C42.6588 48.4272 37.8288 46.2382 33.1141 44.5569C26.3522 42.1455 23.5551 39.7872 20.6342 37.9282C17.828 36.1422 15.2979 34.0732 12.6248 32.142L4.61533 26.3559C3.28376 25.3939 1.70174 24.4948 0.636946 23.5667C0.208471 23.1933 1.07471 22.4242 10.04 19.5818C19.0054 16.7395 36.3164 11.6955 45.2345 8.65035C58.162 4.23621 65.9164 0.810785 69.1972 0.758183C70.6736 0.734512 72.1305 0.753403 73.3983 1.02235Z" fill="#87F4B5"/>
                </svg>
                <img src="https://api.builder.io/api/v1/image/assets/TEMP/c3206bcacccd957acdd08d3ab93ed80784ba4e0c?width=140" className="audience-icon money" alt="Underrepresented Communities" />
              </div>
              <h3 className="audience-title">Underrepresented Communities</h3>
            </div>
          </div>
          {/* Learn More Button
          <button className="learn-more-button">
            <span className="learn-more-text">Learn more</span>
            <svg className="learn-more-icon" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35693 11.6431L11.6426 1.35742M11.6426 1.35742H3.92836M11.6426 1.35742V9.07171" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
           */}
        </div>
      </section>

      {/* Start Your Journey Section */}
      <section className="start-journey-section">
        <div className="start-journey-container">
          <h2 className="start-journey-title">Start Your Journey Today !</h2>
          <p className="start-journey-description">
            Your path to a high-impact career in tech starts here. Whether you’re learning to code, preparing for interviews, or exploring what’s possible, TekCanon gives you the tools, community, and mentorship to take the next step with confidence.
            Join our programs, connect with industry mentors, and unlock opportunities that move you closer to the career you deserve.
          </p>
          <button className="explore-courses-button">
            <span className="explore-courses-text">Explore Courses</span>
            <svg className="explore-courses-icon" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.35693 12.1431L11.6426 1.85742M11.6426 1.85742H3.92836M11.6426 1.85742V9.57171" stroke="#0D5036" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="popular-courses-section">
        <div className="popular-courses-container">
          <h2 className="popular-courses-title">
            Start with one of our most popular courses to build your skills
          </h2>

          <div className="home-courses-grid">
            <a href="https://www.youtube.com/watch?v=mbh_sBVRFmU" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="home-course-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/67b932ee0663c253168727cf094a91b9fe811b5d?width=590"
                alt="Before Resume"
                className="home-course-image"
              />
              <div className="home-course-content">
                <h3 className="home-course-title">Before Resume</h3>
                <p className="home-course-description">
                  Tips and tricks you need to know before you put your resume together.
                </p>
              </div>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=qMvRgsQcv0M" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="home-course-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c1b74fc9c686c21b1f28e97b34e1bae5e3905d64?width=592"
                alt="Your SWE Resume"
                className="home-course-image"
              />
              <div className="home-course-content">
                <h3 className="home-course-title">Your SWE Resume</h3>
                <p className="home-course-description">
                  How to structure your resume for a software engineering role
                </p>
              </div>
            </div>
            </a>

            <a href="https://www.youtube.com/watch?v=WNQ1LyQlkpM" target='_blank' style={{ textDecoration: 'none', color: 'inherit' }}> 
            <div className="home-course-card">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/297b461c4260052f25ea90987222f57fea9b0ff9?width=590"
                alt="The Interview"
                className="home-course-image"
              />
              <div className="home-course-content">
                <h3 className="home-course-title">The Interview</h3>
                <p className="home-course-description">
                  How to prepare for your software engineering interview
                </p>
              </div>
            </div>
            </a>
          </div>

          <Link to="/courses" className="view-more-button">
            <span className="view-more-text">View More</span>
            <svg className="view-more-icon" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.85693 12.1426L12.1426 1.85693M12.1426 1.85693H4.42836M12.1426 1.85693V9.57122" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <p className="testimonials-label">Testimonials</p>
            <h2 className="testimonials-title">What Students Say About Our Performance</h2>
          </div>

          <div className="testimonials-list">
            <div className="testimonial-card">
              <div className="testimonial-background"></div>
              <img
                src={process.env.PUBLIC_URL + "/assets/j-review.jpeg"}
                alt="Student testimonial"
                className="testimonial-image left"
              />
              <div className="testimonial-background"></div>
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "TekCanon's tips and teaching methods were a great summary of all I needed to know to secure my first internship at AWS in just my sophomore year of college.”
                </p>
                <svg className="testimonial-stars" width="88" height="18" viewBox="0 0 88 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 0L10.4084 6.21885H16.584L11.5878 10.0623L13.4962 16.2812L8.5 12.4377L3.50383 16.2812L5.41219 10.0623L0.416019 6.21885H6.59163L8.5 0Z" fill="#CBA135"/>
                  <path d="M26 0L28.0206 6.21885H34.5595L29.2694 10.0623L31.2901 16.2812L26 12.4377L20.7099 16.2812L22.7306 10.0623L17.4405 6.21885H23.9794L26 0Z" fill="#CBA135"/>
                  <path d="M44 0L46.0206 6.21885H52.5595L47.2694 10.0623L49.2901 16.2812L44 12.4377L38.7099 16.2812L40.7306 10.0623L35.4405 6.21885H41.9794L44 0Z" fill="#CBA135"/>
                  <path d="M62 0L64.0206 6.21885H70.5595L65.2694 10.0623L67.2901 16.2812L62 12.4377L56.7099 16.2812L58.7306 10.0623L53.4405 6.21885H59.9794L62 0Z" fill="#CBA135"/>
                  <path d="M79.5 0L81.4084 6.21885H87.584L82.5878 10.0623L84.4962 16.2812L79.5 12.4377L74.5038 16.2812L76.4122 10.0623L71.416 6.21885H77.5916L79.5 0Z" fill="#CBA135"/>
                </svg>
              </div>
            </div>

            <div className="testimonial-card reverse">
              <div className="testimonial-background"></div>
              <img
                src={process.env.PUBLIC_URL + "/assets/f-review.jpg"}
                alt="Student testimonial"
                className="testimonial-image right"
              />
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "TekCanon help in preparing for interviews was key for my preparation. His will to help, communication, technical advice and mock interviews were a key part in my development as a strong candidate for every Software Engineer interview. I would recommend him and his platform to anyone who wants to prepare for these types of interviews.”​
                </p>
                <svg className="testimonial-stars" width="88" height="18" viewBox="0 0 88 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.5 0L10.4084 6.21885H16.584L11.5878 10.0623L13.4962 16.2812L8.5 12.4377L3.50383 16.2812L5.41219 10.0623L0.416019 6.21885H6.59163L8.5 0Z" fill="#CBA135"/>
                  <path d="M26 0L28.0206 6.21885H34.5595L29.2694 10.0623L31.2901 16.2812L26 12.4377L20.7099 16.2812L22.7306 10.0623L17.4405 6.21885H23.9794L26 0Z" fill="#CBA135"/>
                  <path d="M44 0L46.0206 6.21885H52.5595L47.2694 10.0623L49.2901 16.2812L44 12.4377L38.7099 16.2812L40.7306 10.0623L35.4405 6.21885H41.9794L44 0Z" fill="#CBA135"/>
                  <path d="M62 0L64.0206 6.21885H70.5595L65.2694 10.0623L67.2901 16.2812L62 12.4377L56.7099 16.2812L58.7306 10.0623L53.4405 6.21885H59.9794L62 0Z" fill="#CBA135"/>
                  <path d="M79.5 0L81.4084 6.21885H87.584L82.5878 10.0623L84.4962 16.2812L79.5 12.4377L74.5038 16.2812L76.4122 10.0623L71.416 6.21885H77.5916L79.5 0Z" fill="#CBA135"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
