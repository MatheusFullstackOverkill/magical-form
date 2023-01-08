import * as React from "react";

export function errorMessage(error: any) {
    if(error) {
        return (
            <div className='form-error-message mt-2' style={{
                padding: '5px 0px 0px 0px',
                background: 'white',
                border: '1px solid #EB575'
            }}>
                <p style={{ color: '#EB5757' }}>{error}</p>
            </div>
        )
    } else {
        return <></>
    }
}