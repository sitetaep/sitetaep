

export default function Pole() {
    const { pole } = useStaticQuery(graphql`
        query {
            pages: allContentfulPole {
                distinct(field: name)
            }
        }
    `)

    return (
        <section className='p-6 flex flex-col space-y-4 sm:flex-row sm:space-y-0 justify-between items-center'>
            <ul className='px-12 flex flex-row space-x-6 uppercase text-black font-bold'>
                <li>
                    <Dropdown
                        title='Spécialités'
                        options={pole.distinct.map((name) => ({
                            title: name,
                            link: `/${name.toLowerCase()}`
                        }))}
                    />
                </li>
            </ul>
        </section>
    )
}