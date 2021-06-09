export default function RenderWork({ seeWork, work }) {
    return (
        <div>
        {!seeWork &&
// TODO: Iterate over Work and list out everything.
                <section>
                    <p>Job Title:</p>
                </section>

        }
        </div>
    )
}