import CardItem from './CardItem'

function CardContainer() {
    return (
        <main>
            <div className='container'>
                <CardItem 
                    imgUrl='https://source.unsplash.com/WLxQvbMyfas'
                    svg='./public/img/map.svg'
                    country='JAPAN'
                    link='https://www.google.com/maps/place/%D0%A4%D1%83%D0%B4%D0%B7%D0%B8%D1%8F%D0%BC%D0%B0/@35.3606544,138.6904546,14z/data=!4m16!1m9!3m8!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!2z0KTRg9C00LfQuNGP0LzQsA!8m2!3d35.3606255!4d138.7273634!9m1!1b1!16zL20vMGNrczA!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?authuser=0&entry=ttu'
                    place='Mount Fuji'
                    published='12 Jan, 2021 - 24 Jan, 2021'
                    text='Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.'        
                />

                <CardItem 
                    imgUrl='https://source.unsplash.com/JmuyB_LibRo'
                    svg='./public/img/map.svg'
                    country='AUSTRALIA'
                    link='https://www.google.com/maps/place/%D0%A1%D0%B8%D0%B4%D0%BD%D0%B5%D0%B9%D1%81%D0%BA%D0%B8%D0%B9+%D0%BE%D0%BF%D0%B5%D1%80%D0%BD%D1%8B%D0%B9+%D1%82%D0%B5%D0%B0%D1%82%D1%80/@-33.8567799,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?authuser=0&entry=ttu"'
                    place='Sydney Opera House'
                    published='27 May, 2021 - 8 Jun, 2021'
                    text='The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century`s most famous and distinctive buildings'        
                />

                <CardItem 
                    imgUrl='https://source.unsplash.com/3PeSjpLVtLg'
                    svg='./public/img/map.svg'
                    country='NORWAY'
                    link='https://www.google.com/maps/place/%D0%93%D0%B5%D0%B9%D1%80%D0%B0%D0%BD%D0%B3%D0%B5%D1%80-%D1%84%D1%8C%D0%BE%D1%80%D0%B4/@62.1049045,6.9922376,12z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?authuser=0&entry=ttu'
                    place='Geirangerfjord'
                    published='01 Oct, 2021 - 18 Nov, 2021'
                    text='The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.'        
                />
            </div>
        </main>
    )
}

export default CardContainer