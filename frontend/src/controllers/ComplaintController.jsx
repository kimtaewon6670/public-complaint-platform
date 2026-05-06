import { useState } from "react";
import ComplaintView from "../views/ComplaintView.jsx";
import { createComplaint } from "../models/ComplaintModel.js";

function ComplaintController() {
  const [complaints, setComplaints] = useState([
    createComplaint(1, "도로 파손 신고", "집 앞 도로가 파손되었습니다.", "접수 완료"),
    createComplaint(2, "가로등 고장", "밤에 가로등이 켜지지 않습니다.", "처리 중"),
  ]);

  const handleAddComplaint = () => {
    const newComplaint = createComplaint(
      complaints.length + 1,
      "새 민원",
      "새로운 민원 내용입니다.",
      "접수 완료"
    );

    setComplaints([...complaints, newComplaint]);
  };

  return (
    <ComplaintView
      complaints={complaints}
      onAddComplaint={handleAddComplaint}
    />
  );
}

export default ComplaintController;