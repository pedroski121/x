export const ProductFormAlert = ({ addState }: { addState: boolean }) => {
    return (
      <div className={`alert ${addState ? 'alert-success' : 'alert-danger'} alert-dismissible fade show mt-2`} id={"scrollTo"}>
        <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
        <strong>{addState ? 'Success!' : 'Failure'}</strong> {addState ? 'Product Added' : 'Product Not Added'}
      </div>
    )
  }