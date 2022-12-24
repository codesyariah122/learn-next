import {Fragment} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'

export default function StoreLayout({children, categories=[], isLoading=false, categoryName=''}: any) {
    let current = 'Welcome in my store'
    const router = useRouter()

    return (
        <>
            <Head>
                <title>Store Page</title>
            </Head>

            <main className="flex flex-col min-h-screen">
                <header className='grid grid-cols-1 gap-2 px-24 py-24 bg-blue-400'>
                    <div className="col-span-full place-self-center">
                        <h1 className='text-4xl font-bold'>Header Store Page</h1>
                    </div>
                </header>
                <div className='overflow-x-hidden flex justify-start place-content-start space-x-36 p-16 px-36'>
                    <div className="flex-none">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="col-span-12">
                                <h1 className="text-2xl font-semibold capitalize">product category</h1>
                                <ul className="mt-6 sticky top-0">
                                    {
                                        isLoading ? 
                                        <>
                                            <h1 className='text-blue-800 text-2xl'>Loading ...</h1>
                                        </> :
                                        <>
                                        {
                                            categories.data && (
                                                categories.data.map((category: any) => (
                                                    <li onClick={() => router.push(`/store/${category.slug}`)} className="mb-4 text-1xl cursor-pointer" key={category.id}>
                                                        {category.name}
                                                    </li>
                                                ))
                                            )
                                        }
                                        </>
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="shrink w-80">
                        <div className="grid grid-cols-1 gap-x-4">
                            <div className="col-span-full">
                                <h1 className='text-2xl font-semibold capitalize'>
                                    {categoryName ? `Category Product ${categoryName}` : current}
                                </h1>
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
                <footer className='mt-auto bg-orange-400 w-full'>
                    <div className="grid grid-cols-3 gap-x-4">
                        <div className='place-self-center'>
                            <h2>Footer Store Page</h2>
                        </div>
                        <div className="place-self-center">
                            Sitemap Link
                        </div>
                        <div className="place-self-center">
                            Social Icon
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}