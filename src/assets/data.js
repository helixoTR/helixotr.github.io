import React from "react";
import { FaCss3Alt, FaJsSquare, FaHtml5, FaNodeJs, FaBootstrap, FaReact, FaPhp, FaStar, FaPython } from "react-icons/fa";

const BOOTSTRAP_FOR_SKILL_ICON = "text-4xl mx-auto inline-block";
const data = {
  name: "Doğukan YAŞAR",
  title: "Backend & Frontend Developer",
  social: {
    github: "https://github.com/helixotr",
    email: "mailto:ben@dogukanyasar.com.tr",
  },
  about: {
    title: "Hakkımda",
    description:
      "Merhaba ben Doğukan. Uzun yıllardır web ve masaüstü geliştiriciliği ve siber güvenlik ile uğraşıyorum. Her geçen gün yeni bir şeyler öğrenmeye ve öğrendiklerimi güzel işlere yansıtmaya çalışıyorum.",
  },
  skills: [
    {
      skillName: "HTML5",
      skillIcon: <FaHtml5 className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "CSS3",
      skillIcon: <FaCss3Alt className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Bootstrap 5",
      skillIcon: <FaBootstrap className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "JavaScript",
      skillIcon: <FaJsSquare className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Node.js",
      skillIcon: <FaNodeJs className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "React",
      skillIcon: <FaReact className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "PHP",
      skillIcon: <FaPhp className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "C#",
      skillIcon: <FaStar className={BOOTSTRAP_FOR_SKILL_ICON} />,
    },
    {
      skillName: "Python 3",
      skillIcon: <FaPython className={BOOTSTRAP_FOR_SKILL_ICON} />,
    }
  ],
  projects: [
    {
      title: "PHP Fake Subdomain",
      description: "PHP kullanarak basit bir şekilde fake subdomain oluşturma projesi.",
      tags: [
        "php",
        "fake subdomain",
        "php fake subdomain",
        "php wilcard subdomain"
      ],
      link: "https://github.com/helixoTR/PHP-Fake-subdomain"
    },
    {
      title: "PHP ile Çekiliş Uygulaması",
      description: "PHP ile basit bir şekilde çekiliş yapma projesi.",
      tags: [
        "php",
        "php ile çekiliş yapma"
      ],
      link: "https://github.com/helixoTR/PHP_Cekilis_Uygulamasi"
    }
  ]
};
export default data;
