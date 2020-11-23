import React, { memo } from 'react'
import EmailForm from '../EmailForm'

export default memo(function () {
    return (
        <div className="contact">
            <EmailForm/>
        </div>
    )
})
