import React from 'react'

const Item = () => {
    return (
        <div className="container-fluid">
            <main className="wrapper">
                <section className="header">
                    <h1> Recipe Title </h1>
                    <p> Recipe description </p>

                    <img src="..." />
                </section>

                <section className="content" style={{ paddingTop: 80 }}>
                    <div className="row justify-content-between">
                        <div className="itemContent">
                            <div className="col">
                                <h3 style={{ color: '#6F5B3E'  }}>Ingredients</h3>
                                <p style={{textAlign: 'left', padding: 40}}>Something here</p>
                            </div>

                            <div className="col">
                                <h3 style={{ color: '#6F5B3E' }}>Instruction</h3>
                                <p style={{textAlign: 'left', padding: 40}}>Something here</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

export default Item