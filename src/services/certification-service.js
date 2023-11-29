const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const { convertToSnakeCase } = require("../utils/common");
const config = require("../config");
const {
  getCertificationByUserIdAndCourseId,
} = require("../repositories/mysql/certifications");
const { convertToLocalDatetime } = require("../utils/moment-timezone");

const CERTIFICATION_FOLDER = path.join(
  __dirname,
  "..",
  "..",
  "public",
  "images",
  "certification"
);

const createCertification = (userName, courseName) => {
  const name = convertToSnakeCase(userName);
  const outputFile = `${Date.now()}_${name}.pdf`;
  const courseCertificationTemplate = convertToSnakeCase(courseName);

  const doc = new PDFDocument({
    layout: "landscape",
    size: "A4",
  });

  doc.pipe(fs.createWriteStream(path.join(CERTIFICATION_FOLDER, outputFile)));

  doc.image(
    path.join(
      CERTIFICATION_FOLDER,
      "templates",
      `${courseCertificationTemplate}.png`
    ),
    0,
    0,
    { width: 842 }
  );

  doc.font(
    path.join(
      CERTIFICATION_FOLDER,
      "..",
      "..",
      "fonts",
      "PinyonScript-Regular.ttf"
    )
  );

  doc.fontSize(55).text(userName, 65, 265, { align: "center" });

  doc.end();

  return `${config.app.baseUrl}/images/certification/${outputFile}`;
};

const getCourseCertificationByCourseAndUser = async (userId, courseId) => {
  const certification = await getCertificationByUserIdAndCourseId(
    userId,
    courseId
  );

  console.log(certification);
  return convertToLocalDatetime(certification);
};

module.exports = { createCertification, getCourseCertificationByCourseAndUser };
