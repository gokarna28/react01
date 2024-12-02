import React, { useState } from 'react'

const Update = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count => count + 1);
    }



    //form object 
    const [form, setForm] = useState({
        firstName: 'Gokarna',
        lastName: 'Chaudhary',
        email: 'gokarna@gmail.com',
    })

    //form nested object
    const [person, setPerson] = useState({
        name: 'gokarna chaudhary',
        artwork: {
            title: 'my deram garden',
            city: 'kathmandu',
            image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA8gMBEQACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAIFBgEA/8QAOBAAAQMDAwIEBAQFAwUAAAAAAQACAwQRIQUSMUFREzJhcQYigZEUI0KhNFKxwfAVM9EkYnLh8f/EABsBAAIDAQEBAAAAAAAAAAAAAAIDAQQFAAYH/8QAMREAAgIBBAEDAwEIAgMAAAAAAAECEQMEEiExBRMiQTJRYaEGFCNxkcHR8IGxFUJS/9oADAMBAAIRAxEAPwAsRWxLlHp2EeLrJzqgogybCyosOgRflQyXE875glMCiAblKkyByFuFXmxMhprVCFk7WCZEiuSDhdOQxI6GI0SLz5TUNghN8VymxY9HhDYcFOTJTOxss5MiyWMPtt5Tl0AkQiaC5Sg30EqA3w0VgxTspZG/mqLLa6GYpQxtrhGmLlGyEs4IOQu3HKBV1cjjwgbLGOKPULzvF1yJyRVGp09kjwLA29k1GXmpF9SUvG9TZnZJjpGwLhFiM0m59r8IhiXAm+ZwcdvHdc5UMjjsScZBMXNF0G8sVFRphG1EzSflN/RFvA9OLBmvmvwfso3nejAr4ZFYZaaGg64WdqFwQiJCzJDADm25Q2dZ7olsFnm5KVIhoegGFXkJkMtGFyFnXcJkTkuQBwU9IckFGRhHFHJC8oTENiiDAL2KbFBu6Jv27MJyIVihHzpkR1Bmsc9uGk+wTkC2l2cDS3plcFaaAVD3KLJikJSMPIGVyY5NAHkgcIrCoBucTkLieDro7gdyuOui50bR/EcHvajiinqNTSo19LSRwsGLI7MieRyD7w3yhcKoDNKLHObKUco8lVVB+/B5UNstQ2pEJvy4ecqGdfJDAaD3soOb5ISybHGwuLKLCSsW8ZqiydjKuB6uJl6SG2SYVPOuBdE/EWTNchULTS2KCglA4yTcgkc40MxC5VeTFyQ9Fwq77EMNuARpA7TocCE2KJ2g3jKahsUSZgJyRNA5QjQyKFXkjKbEalaIh7nmzQXHsBdMXJLUY8t0S/DVLGmSSF7WDkubYD3T4Qk30JnrdNjVua4/JeyOho6KmpYbmrlaHkWufr2V6GOrPGa7yUs+VtOkBfRTSMLvAeHdRZVHCV9Gx47yWNw25JV/MqaqPw3Fr2lruzhZBJG/jkpK4uxQgG+VyGC0rAjDixdwaCuCsLRt8WcNUi5ukbXSowyMWCYjHzStlg9ykRQIkAXJUojvgrpXvBL/ANIUWPUVQk6SWaXeMBA7sZUYoHPG6T9ah2cpJAXyPjjs5DdBqKk7Q0xzRAL5JGVKFO1IX/DsOb8qQtzM9BMCrSZpyiORvuUnN0LoNk9Vj5eGSAmBStwSOQgiyCTBkPwjIVabFMcYcJHyKaPOJunRJSJMJTUTR15RoKKIb7JyYyiUTZKiQNhYXH+numIiUowXuY5R0tBPJJFM6Vk0PnYHAh/16K/iwwmrsxNV5TUYG0ornocl1On0uIBtP4bCAGujbuDj6kBaEcMUvaeO1Wv1WWTlmZTa78QsfSmJhcN3mc08fb/76J0YOPZUhnWR0Uul6u7/AFIzytfta0MdvJIFvpdEk+hmee2jWUOry1rv+naXADLjhv1J4P3SmkuwI5MuR+1f2FtU1GMOFE+AV1cTctadoj93Gyp6jLjS5PS+Kx6rCt+6v1KStinptpqKd8G/LWkhw9rjBVeGSM1aPZ6XJ6sOe0IyPRlpIWe/KklIsNDjL5t3RcV87pG3pQGRBNRjz5Z177A5XApCcsubuNmrrGqKoTqappPhsOCcqLQUYPtgZJfDYB07qAatizqgB2ShbQSxgKqpa9gF+qXKSHY8bTJGa8QDXZ4XbuCHHkkC+wXbiaRlaZ5VxM1potIDwgy9FZjbHLHz9kUdeAVWsg4zCBs5jUKryYpjLThADR5MiwkibSAmomjpymI5IgIzJKGN69e3qU6EXJpI7Jkjixuc+EhgSyGFzKWBzIm4MjXPBv3NxYlRmUsUtsjIjrIZXcXZRPqpqPVaeeRwDnnY65AweDbor2kyq0hevUc2JpfBdukcdpA3RE2Atfbj3/z+mxCVKzxms3Y6aQpVUDJBsexzXDguAwPpcpscql2YKeXFK1/v6BqLSI2PL3C7hxvHyn0ucn6oJZlF0i3BZMz3O+PwMapXu0+ikleLWBEbLEEnqcY/ok5ZpI3/ABmBylyjOac+fc6Zt3EklzmnDj1N+3QAZKyNTlUvaexwqMIpfJditaIhBXRymF44O0i3fb0+hus+HqJ3AlTqW6LV/j/JQV8LYKgtjkEkbhuY8du3utbHPdFM2tPkWWCfyJO5wmWP6NJoMGyNpPKlGdqJGjDgG27JqZn7eRWaYuJaFFjYxSVsBO4CPYSuBbt2ivq2hsW6PnuhdBxk26EDVeI0Nub3SZZK4HRxfJyoiLS1znYKU5MOMl0ekhis3aT6pbIU2RlaWOuw4Ubmgk0+wobNbzIt7O9pSVFDPp83h1LNp6LRx5YzVotxyxyq4h4n8Lsr4AaGo33Kyc51B73CqWCdYlyZDGo+Ehi2HahBon0RolECcp0Q0ibXYCYjmgc9U2njlfuLbM8wORkf2Wh4+SWW2Y3n8WWegax/dX/L5MxV/Fuu6brrKaoeyWjc8M8AMswtPBHrkI9TpMeVty7+5iYHGGNKJHUaqCWvLA15O8Zv5cj/AD6JGixu+fgtPNka/BsdOe00jXOkc0kWYTGRuPuDcfW9/Rb0LRg63F6kaQwY3Bu1hk+U2AjFyT65BP2TNke2jBbmuLf/AH/gM0xtcPEBDSMEWZb35H7n2UOKXRa0+FTyKUvjozXxXM6d7Wh7XtDhbYPlIvgg9VRy8ukev0cPTxuQho2oRUbPFkkdK2GEyujA85Db2WRlxSbouTzynaqgGlfHeoa1Uimno4vAfcgRjMJtfcD1AHPv9FYwaWGKdr5Kc0skHXY/XSNmpoJGkPLS4OkGL8K7l2Utps/s886hNZX88ISpIzNO0Di6TZ6GcqRsaCPwoQmRMnK9zDS1LWZcVO4GONiT6ppyDwu3HOLSEpqjxJCAcXUORyjSAyylrPDve6XOdBRjzYORjI4AbfMeqQ3aD3cic8j3gDKFy+CVQenY48uUNgyZ2Q3O0FLlImIQB9uUO86yHxbL4le08iyseKnux2FoF7CqhNyr2V8F1jkaysz5AYcOVVghWdElkMZjOEti2GBUHUS3piRyRBxuU1DEj26wRomgWySeUMhG5x+oTsc9jtA58cJ4nDJ0yr1gano5a2spYHPI/JqJI9xHseL2utD1FljUWeRno8ePI6ZQUIlnq2uJ3XPue/8Ansrejw88CdXkhixts3GmSStlLGSGx+Ys8RrLg26kG/NrWVprbJpmfL+LijNIsg+Voja6GWN7W2JDgP3AFvrdNilV2YmZTU9sYga+rfT0ji+mkY6QXG4tLR7YyOOLJOSdGv4/S3w+zMV7DLE8hzd8p3YFgD0S8OPdFyRr5s8ceSGP4ZSQTyQVLZI2NDuNrhjnIP3t9lQzRaNGMFkhVllRxROLoNKoYoJZsP3OuS2+QOwvb9lGOc8klFIFYsWBOeV8GrfpDf8ATmU5fHuAy5o5KvTxqGNRKei8u453OXQnpulGnlPiOaTfFlTUT0/7/i1Ebgy3nkETdoUuVARVuyuqnCWO17OSnKxidMqJZpIXbBc3Ub2MaUlYanY4sL5XbT2UOToCVICZm7g8m6Xuvsmkgl3Tt8Ngc5x4aMldd8IRJpcvgmaWpbGA6lm3D/sKW1P7MFZcbfEl/UutN0Jv4b8Tqcj42EXbEwgG3qVcw6RzVzM7P5D3+nhV/kei+H9Je1sonmtfcRuHH2TJePj9xT8hqo8bUOD4e045a6baePnH/CH9xh9xf/ktT/8AKMP8Tw7Y45lk+FzJx2nodBLlxKelN7LXzS4L8iwYsrI+RYUJLZAeNIkwGMM4SwSW6wRRORwOTUHRK6NEkuiNHDWiTMh1FuEGZtQsVqYt4jR/EFLDr+n/AIOWQxBpD2uDb5FwP6qv4bWznqJrb0v7nnNTi2xMpT/CTqRxc2oa8DqWEE/dezwahRXMTz+swvNwpFfX0FTTz33/APiOQ23UWTZqEvcnyRpsmXHH05K0MUk8v4cGfVI9zRYOMY3W98n/ANJKnXDZYlhlJ8Q4EJhV1MpDpWy38roxtHphLcVN9l+MvSj7I0x6n0qZ0V5JGnGHXHGM2ToTWNVEo54yzyUpPoXf8LyVMwY2SJl+XF2Me979VU1OVJWo2amklt7f6Fvp/wAMHTaOSo/FxzTsBL2Nt5PtzdJ0mpXrJNUR5CEsuLgG6ZzhYc9LLTyxUzGUIw+oA2SWkl8SS+e6z8kmnRd0GasyUSNbXXz3VWUrPawhwVsdb8xKGyJx4Imqa+o3OXJ8kKNIvtP0Cp1KJsz5BBA7ILsk/ROWCWT8GZqPI48L2rllnD8I0MTwZaiWVo/QbAE+4TVpI3yyhPyuaUWoxSLOEUNEwiGKOMM7DI+qsxxpcJFGbzZXcm2Kya40PIaNwumrGvkbHSWrYlqVY+eawdZtvL6qbS6LGDEoxDU27w2kHLhaxRbiJNfJLwphhlU4NHAtwEO471V9jOfEzb6YSOguvD+EyVko3dFxkozNEcNK9Dnkasy1ZwFmzYgIElsgNGkSYLDtKGyB7TKE19QIt20dSi3KPLE5svpRs0GofDNNHQOkpS8ysFzc8psMkZdFDFrsjyVPoyYuDbqmWbK6skXYUpnJDGjt31Zd2SNZPbiF6h1Au9TfVMopPwQu4AE2ObDlU/2czY4axqfUlX+DB1sG8dr4MnLX1Thf8Q4E9nlfQNiRivnuIJ9dO/c2SQkO5zzzn9yokg4Yl9hYRB0gfcXObkDn7f5wkOvsXIwfyNwOkjjDWuPyYFrdPp7e6mI1wT7CCeoBG2Z0drWznH/CNJMD00n0MxV9VE0bZ3O6AX9CEE8KkEtq/wDUYOv181JURFniTPjLYyW22k9UOPQwjLcmV9ZqYxh0JUzDQxtEpLpLZcVclKkefyOWSR2urWuh+Yeyo6jq0anicDlnRSF8tVMIYGF7jw1ouVmcvo9zOUYR9zo0ND8FVM0LZKqobA45DNtyPdWIaVvlsyMvmIQlUI2aSi0PTNPgERhZNIcl8gvcq1DDCKMrJrdRmld0iWqVfgU7Y6ezQMADonwQOnx75bpCD6ud4Fjx0R2iysUEKVEr3udfG7Jyo3DYxiiLGhrRcDzWuh3Au2HniaYi+2Wuuh3C4Td0M0sZd4br4F1LnwLlJK0NbWdSEveAmUGsQ+Lpr2gfpK8H4zJtzm/gdZEY+lbtsF6bLK0bEnZYs4CoSYkK1KbIDsSWwWFaVFkF58O3ZJJN0ASNRKolPVU1tLqLUniXc43HZYry5FLdFld4FRQa/NSyVYNNFsNvnI6lemwZnlxqUuy9pIzUfcVTjhORcRY6A38xxVPyEv4ZW1T4o0VHLtqrWBBbY3WDppvG7Rm5UnHky2v/AA5CJ3zafKYQcmJ2Wg+i9Nof2kyx9mdX+V3/AMlb0ItdGVlM9JK5swILefXBJXrMeeOXGskemJ2e6hzQw7UKuWmDgHtYTn9RDQ7+/wCyXmm4ofDbfIOOq3NDrhpIvZwwLm1vocH3RqXCDkkiTpnH5b5za5624J/v6o42xcmgNRWfh4nSvcWtbnPJ9EyuLFTyKKp8k6DU5Z2te47LWNh0TIS9pk6mLnM0MThVRuhfd24Wb7rpJNFVR91DNH8Jvlj3ajVOZf8ARHz91UnjU1TNTTal6eW6C5Lujh07SIvDo4WNI/Vy4/VdDHGCpILJPNqZbsjIO1Y522sj7CWlrsUkrnSzF26wXcDlhUUBe8zytLhdoXbqDSUFwSttL7nrgrrBb4IPgDvUoHIneeMVonHqDdDuIv3E5HXhPqF1gQVSHYrRwM6YQyYmSuTE3VQ3HPVBYz0yMzA+jII6L59ppbcyNdcSMV4eyZzexXqJTuJsJ2hlnCrSYIUJLZFhWpbYLCNKhEGo0mERaaXPGXZCoarKvpKGZ3kAG++wPKpwjY1dFRWAiof7r0OGlBFrF9KF3JqY1F5oLLRFx6rM8nP2lLUy5LalzUk9AFk4lyU8jpFbrVQ1jyLi/Zel8P4SWpl6mbozdTrVgjXyZTUHCpcQ8DbbHovd+jjx41jiqSMnDmyTnvbFvhpr6f4jpHxuNnSBpHf5SM++FQ1EfZJmxDIpVYnVQyU1ZPG9hLRNIcjDmuNyPryuxOMoJxLOROHFkHT+HHckuIFgf5h0Pump7RGTIv8Af1X8irqJH1Lh4mG/yg4+yh89lOeS2P6edrHjqbNt9V0ZfB0lbNHp1TtqA8nDco5T4IwaffIvP9YfI0BqXZdWmihbx3TSEuUNjtqiiYIvyosh2TOywsfdc2RyGhdc7DwhsCapWG8O8RFs8qNwvcFibwT0UNgSYOU7nloHylLc6DjHiwjaXdHd/lGQEG99gvJUqQvUvL7NacIXlk+AopLkkIIrC4N0NMV60icI3QOHovn6dTTNiXDMjqEPh1rx9V6THO4GlilcSDQgcg7CBLbICtSmyBmjjEtRGw8E5QylUWwJuotmqmO2NrG4DRaywrcpWyjHuyvd/uD3VvEuB66K3UXD8QSOy1sEvYPxfSKO6W7qymOs0WlDZShY3kXbM/M7kdm1GOhhkc/zngLR8N4x5pqc+jK12oWKH5MpW1bqiR0hJuf2X0HEo4oKMTzijPNPdLkr5ZDnOUjJm5qzWw4El0V1RUywSslhcWPa4EEIMkfbR0ZttolqmrSalWy1BaY2vt+Xfy4Q4oRhGkRlzTlK2R06KSp3sIJHfoF0zsalPgaZQwUjbn5n9ylSmy/h0qXYnfwqxrB+t1wlqZ2TDUqLenBttB65KJyss48axxosogbDPC7cQ2OQCwKlMBsnT5eQeV24KXQwyMA2KixUpcBn2aW9F1gLkKyQ90DmgHHg8XOc8C5F+iW5s6kkH8IFhIPzNyor5FPI7oDPWExnYCbBQ5WTHFTI3YWi3TshbAdpnd47O+yjcyNpOjPLe4XgJdm3MoNdhLakPAWzpp+wt6eVorwBZM3DzoQtnBWpTZA9pX8bF7pWZ+xi8r9ppJuFkRKkRF3nA9Vfx/SN+Cm1I2qSFoaZ+wsYvpAs+Z7R6qzY2XCNLBdlH9Flyh62pjD7mXmlTbMxWUlTVSGXebfyr6LpNKseNJI8dqNUsmZplRM+Rs/g2O4crtTnWFcmjpcW/o5M3a3PK8/j1Tz6lV0a7xqGMrKkF2Bcm+AF6PJzEyIOpMtdI+GpZWCor/yYOQ04LkuKaQzZvdIsKyaCnj8KlaGsHFkEmaeDBXZVvcXm7lXky0uDrWNwS0EhQQNRkWFsDquugWhyB5Bzwp3C2h+FwIBUbgGgtwx24KXI6rVBhLcYQvIgNpMBztpKBzbBbSGWRhp3G+CuFOVk53XkaY23t1UOREFw0whkaInE9R+6hy4FOL3CzSTFYWF1CfBMn7rAiURO8NA2S4uS3BPEd3Q2AFpTaQFeFkbslwKa/BuiDgFd0uT4J07pmeVvcXbJAIWziYQnD2k/xrPdJzv2MVl+k0c3Cy4lVCTvMtGH0jfgp9Ub/wBSbdlb079o/C+CFGzdM0J7lSCm/aaGqkFPQlzugReHwrPrk38GH5DK4YZNFJDJLO64bYdzhfQzxUYtytgqugeJDNtBv2XnfOYcs0njVo9P4vJBQpg4vh2rqvzJbU8P88uL/RUfH6HNuU5Ki7n1OOtseWNQ02kaTd0dqioH63DC9I5JcMpY9LOT3PgTrq+Wrvc7QkymaePDHH0VErs5SJSLCBEpZ1Ew4BQ2dQSM9+qGwWhyA7m2XWCNQy7Rbso3IFqwwkMht0QSnZFUMxCxtyoQEmOxva0DcOOimyvJN9BWzAeZDvA2/YHFLvBabgAoHI6Ua5BuaPEJv8vKjcS5cEXSODsGw6KFNA7V2QIu7d1SZ50ifiju53ZJ9eRFIdjw9eTkbL6CV0fiUxv2RYZbZC4OpGScza8t7Fad3yaC5R0BccdCg4f0j+LHsk6j6BeXo0MvCzUVUKP5+q0IfSMRWam28gKdhY7Ez2lsvOD2TskvayMr4LXWR4dDuljcWbh0wtH9m8U/3mWSSpGB5OX8FxRnXVu4Yda36V7izzyxk4dTmgaXwhpkb5dwukZpNK0X9HCLkoyEKrWKutduqZnH0vYLPeobPQ49NDH0hfxr8od9jdpB0t11nbQLnoGwiN9yBs4kOChs4k19sqLODwSvt6IHIGhuEhxUWC+B2IgFDYthmS2GObrrAcRgPsd71G4Bo4ZnOfc+UIW+SGkkFe6/GBZBKdC6O3uEmWZA0eKC5SO6IF4b0XLH9wbI+Mm7UQWA4XkDaGbB0JHol3Uhb7szGpReHU+61MMriW8crQsEwYdUED2k/wAUPZJz/QBl6NBJws+JWQEQySn8qMuK08GHJkVQVkucY8tjB+HXzgOq5mwsHIHK2tL4bJ9WV0VnrkuMathozpWlAiljM0n8zlsY9HpsXxbAcdTm+p0it1fU5a6F0UgDYnfparHrRh9KGQ0UF3yYusa6mlIPl791ZhqYzVGVn0UsMvwehqMAEi58ru6Zv+CtsrlCtSdstxwVl5VtnR6HSz347YMSIbHNEXyYU2QdD79VDZx4SIbOo9uJwhbOCMb3Qs4YhdZ1rXQtgsYadrtzUNkDLJPlACGwA0ZDQDZdYEhhri7rZLlOhYRrsJUs32AYcEABIbcmC2e8QDjlMjBLkW2d5yeqamLbByYx3RI5AdxHQrgS4jy0FePZuh4z0KXIGXJV61BcbwOFb00/gZifwUwVwsHlxxYaPE6SpG1t1EsM8q2wQrNJJcms/DQQt31Ug9lp6LwcUt2b+hnvJOTqACXWmRtLKSMADh1l6CCxYlUEHHROTvIysqK+WY3lkLvRDLOy5DTwh0hOSo9Uh5mN2Cc057pMsrJ2FbVuEjbEIVladoCeNSVMqJ4y0nw3fKenZW4ap1yUcmhj3EAHyH/cKieTe7GYcbxxpnN65MYd3FScSbkKGCEACGySTHfMcIWziXKGyAzDxZA2Qxpl8XS3IAMxC5oFh2nslubAYdhSnbAYVr/RdtFthGXJsUVoVJhGlt3XPC6wXbO78G2UUQWkAlu2zn8I0wlUgBnffyorJ2Ivac3jC8jPs2H2MMwUpgsDXxh8R9kzFKmRHhmbe0teWnotJO0Wk7R5jC94aOpRRVuiW65Njp1NHRUe8NG4r1WkwRxY+jLm3lnRU6jUOmlJLj7KZ5XZp4MaihEyEC10iWQsVYB8x7pEpk7UBdIT1SnkOaAySIN9g0JTORqQDEpTcp0WLYs8pyFsFfKamCSBuF1kE2knCFsgI0lRZ1hAMpbkdYRrUtyBDssluQLYVpKBtghGuQUC2GY7K7gBhmfVRYDGGkYQ2xbCi+SuF2TDQ7kokC2yTRmwGOiYiJIjO3fZq61Z0VRwMNvIitHe4sKQ/lheUydm3LsaCUCzsuYzdRHsEzdcLTustTF0WIdEtPF6tl1Z06/iIjJ9LNfVYogQvV37TPwfWZecnxCqOR8m3BcC7ykSYaFpCbpLYQIkpMmCwMhKhMAVlOU6ItikvKsxFsXdynoWyKME6FxwRnKFkBWhKbBJhLZwVvCFogmFDAZMFACwrFDBDM5QAsaj4UCmHYoQDDjyoxfydGVJL6DDgKX0QkA8zjdIUnY/aqJ+GO7vumULs//Z'
        }
    })

    function handleName(e) {
        setPerson({
            ...person,
            name: e.target.value
        })
    }
    function handleTitle(e) {
        setPerson({
            ...person,
            artwork: {
                ...person,
                title: e.target.value
            }
        })
    }
    function handleCity(e) {
        setPerson({
            ...person,
            artwork: {
                ...person,
                city: e.target.value
            }
        })
    }
    function handleImage(e) {
        setPerson({
            ...person,
            artwork: {
                ...person,
                image: e.target.value
            }
        })
    }
    return (
        <>
            <div className='border mb-6'>
                <h1 className='text-3xl font-bold'>Your Age is {count}</h1>
                <button className="border p-2 text-xl mr-4 mt-4" onClick={() => {
                    increment();
                    increment();
                    increment();
                }}>+3</button>
                <button className="border p-2 text-xl " onClick={() => {
                    increment();
                }}>+1</button>
            </div>
            <div className='border mb-6'>
                <label>First Name</label><br></br>
                <input className="border border-black" value={form.firstName} onChange={e => {
                    setForm({
                        ...form,
                        firstName: e.target.value
                    })
                }} />
                <label>Last Name</label><br></br>
                <input className="border border-black" value={form.lastName} onChange={e => {
                    setForm({
                        ...form,
                        lastName: e.target.value
                    })
                }} />
                <label>Email</label><br></br>
                <input className="border border-black" value={form.email} onChange={e => {
                    setForm({
                        ...form,
                        email: e.target.value
                    })
                }} />
                <p>
                    {form.firstName}{'   '}
                    {form.lastName}{'   '}
                    Email:
                    {form.email}{'   '}
                </p>
            </div>

            <div className='border mb-6'>
                <label>Name:
                    <input className="border border-black mb-4" value={person.name} onChange={handleName} /><br></br>
                </label>
                <label>Title:
                    <input className="border border-black mb-4" value={person.artwork.title} onChange={handleTitle} /><br></br>
                </label>
                <label>City:
                    <input className="border border-black mb-4" value={person.artwork.city} onChange={handleCity} /><br></br>
                </label>
                <label>Image:
                    <input className="border border-black mb-4" value={person.artwork.image} onChange={handleImage} /><br></br>
                </label>

                <p>{person.artwork.title} by {person.name}<br></br>
                    (located in {person.artwork.city})</p>
                <img src={person.artwork.image} />
            </div>

            <div>
                
            </div>
        </>
    )
}

export default Update
