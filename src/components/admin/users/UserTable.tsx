import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { axiosInstance } from "@utils/axiosInstance"
import { AxiosResponse } from "axios"
import useSWR from 'swr'
import Custom404 from "src/pages/404"
import { FC } from "react"
import { TUserData } from "@lib/types/admin"

export const UserTable: FC<{limit:number}> = ({limit}) => {
    const [userPage, setUserPage] = useState<number>(1);
    const router = useRouter()

    useEffect(()=>{
        setUserPage(Number(router.query.page))
    }, [router.query.page])



    const fetchUsers = async (url: string) => await axiosInstance.get(`${url}`).then((users: AxiosResponse<TUserData[]>) => users.data);
    const { error, data } = useSWR(`/api/user/all?page=${userPage}&limit=${limit}`, url => fetchUsers(url));
    if (error) return <Custom404 />;
    return (
        <>
            <div className="overflow-auto d-flex flex-column align-content-center">
                <table className="table table-striped mt-4 table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Full Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Number of Pending Orders</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((user, key) => {
                                return (
                                    <tr  style={{ cursor: 'pointer' }} key={user._id}>
                                        <th scope="row">{key + 1}</th>
                                        <td>{user.fullName}</td>
                                        <td>{user.email}</td>
                                        <td>+000000000000</td>
                                        <td>0</td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div >

        </>
    )
}

