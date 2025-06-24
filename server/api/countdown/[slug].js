export default defineEventHandler((event) => {
  const slug = event.context.params?.slug

  if (!slug || slug.length < 12) {
    return { error: "Invalid slug. Format should be: YYYYMMDDHHMM" }
  }

  const slug2 =
    slug[0] +
    slug[1] +
    slug[2] +
    slug[3] +
    "-" +
    slug[4] +
    slug[5] +
    "-" +
    slug[6] +
    slug[7] +
    " " +
    slug[8] +
    slug[9] +
    ":" +
    slug[10] +
    slug[11]

  const now = new Date()
  const next = new Date(slug2)

  const diffMs = next.getTime() - now.getTime()
  const diffSec = Math.floor(diffMs / 1000)

  const diffday = Math.floor(diffSec / 86400)
  const diffhour = Math.floor((diffSec % 86400) / 3600)
  const diffminute = Math.floor((diffSec % 3600) / 60)
  const diffsecond = diffSec % 60

  return {
    slug,
    now,
    slug2,
    next,
    diffMs,
    diffday,
    diffhour,
    diffminute,
    diffsecond,
  }
})
