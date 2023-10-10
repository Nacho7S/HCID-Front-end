export default function EmptyPage({ col = 4 }) {
  return (
    <tr>
      <td colSpan={col} className="text-center">
        Oopps... somethings wrong
      </td>
    </tr>
  );
}