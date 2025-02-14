<div className="p-8">
      <h2 className="text-2xl font-bold">Welcome to TaskSense</h2>
      <p className="mt-4">An NLP-powered solution for faculty scheduling and urgency-based task management.</p>
    </div>
  );
}

function TicketRaising() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Raise a Ticket</h2>
      <input type="text" placeholder="Enter your request..." className="mt-4 p-2 border border-gray-400 rounded" />
      <Button className="mt-4">Submit</Button>
    </div>
  );
}

function FacultyDesk() {
  return <div className="p-8 text-2xl font-bold">Faculty Desk</div>;
}

function RequestConfirmation() {
  return <div className="p-8 text-2xl font-bold">Request Confirmation</div>;
}

function BridgeReviewDesk() {
  return <div className="p-8 text-2xl font-bold">Bridge Review Desk</div>;
}