function Cells({ count, className }: { count: number; className: string }) {
  return <div className={`cell-grid ${className}`} aria-hidden="true">{Array.from({length:count}, (_,i)=><span key={i} />)}</div>;
}
export function ModularGraphic() {
  return (
    <><p className="form-note">Cell counts are illustrative, not validated configurations or coverage estimates.</p><div className="cell-stage">
      <div className="cell-box"><Cells count={1} className="g1" /><h3>1 cell</h3><p>Illustrative single-cell layout.</p></div>
      <div className="cell-box"><Cells count={4} className="g4" /><h3>4 cells</h3><p>Illustrative connected layout.</p></div>
      <div className="cell-box"><Cells count={9} className="g9" /><h3>9 cells</h3><p>Illustrative expanded layout.</p></div>
      <div className="cell-box"><Cells count={25} className="g25" /><h3>25 cells</h3><p>Illustrative larger layout.</p></div>
    </div></>
  );
}
