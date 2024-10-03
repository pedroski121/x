import React, { useState, useCallback } from 'react';
import NavbarCss from './NavBar.module.css';
import { useRouter } from 'next/router';

const Search = () => {
    const router = useRouter();
    const [query, setQuery] = useState<string>('')

    const searchProduct = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        }
        router.push(`/search?q=${query}`)
    }, [query, router])

    return <>
        <form className="d-flex " style={{ width: "60%" }} onSubmit={searchProduct}>
            <input className={`form-control d-none d-sm-block me-2 border border-secondary shadow-none rounded-5 ${NavbarCss.search}`}
                value={query} type="search"
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search product or brand"
                aria-label="Search" />
            <button className="btn btn-outline-dark d-none d-sm-block" type="submit">
                <i className="bi bi-search"></i>
            </button>

        </form>
    </>
}

export { Search }