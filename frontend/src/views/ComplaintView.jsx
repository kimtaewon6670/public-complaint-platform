function ComplaintView({ complaints, onAddComplaint }) {
  return (
    <div>
      <h1>공공 민원 플랫폼</h1>

      <button onClick={onAddComplaint}>민원 추가</button>

      <ul>
        {complaints.map((complaint) => (
          <li key={complaint.id}>
            <h2>{complaint.title}</h2>
            <p>{complaint.content}</p>
            <strong>상태: {complaint.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComplaintView;