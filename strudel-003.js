// 003
// cheating
// 2026-01-15

// didn't feel like experimenting today.
// followed a tutorial so i can actually learn how to make the non-drum
// parts of a song.
// bibikigarcia https://www.youtube.com/watch?v=jLKMZghlsiY

setcpm(90/4)

$kick: s("bd*4:6").duckorbit(2).duckattack(0.25)._scope()
$sd: s("- sd:4 - sd:4")
$bass: n("<a1 a2 a2 a2 a1 a2 c3 a2>*16").s("supersaw").scale("A:minor").orbit(2)
$chords: chord("<Am F Dm@2>*2").s("gm_synth_brass_1").voicing().gain(.5).orbit(2)
$juice: n("<a f d d>*2").s("supersaw").scale("A:minor").orbit(2).dist(1).trans(-24)