import React, { useEffect } from 'react'

const Account = () => {

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const request = await fetch('http://10.0.1.25:9999/api-auth/account', {
                headers: {
                    "Authorization": `Token ${token}`
                }
            })
            const response = await request.json()
            console.log(response)
        }
        fetchData()
    }, [])

    return (
        <div>
            Account
        </div>
    )
}

export default Account
