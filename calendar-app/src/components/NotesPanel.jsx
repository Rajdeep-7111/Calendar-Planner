export default function NotesPanel({ note, setNote }) {
  return (
    <div>
      <h2 className="text-gray-600 mb-2">Notes</h2>

      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes..."
        className="w-full h-40 p-3 border rounded-lg outline-none resize-none"
      />
    </div>
  );
}