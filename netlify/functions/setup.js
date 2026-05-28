<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
<title>Richardson Outdoor Solutions</title>
<!-- PWA -->
<meta name="application-name" content="ROS Field App">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
<meta name="apple-mobile-web-app-title" content="ROS">
<meta name="mobile-web-app-capable" content="yes">
<meta name="theme-color" content="#2d5a27">
<meta name="description" content="Richardson Outdoor Solutions field management app">
<!-- PWA icons — inline SVG as data URL so no separate files needed -->
<link rel="apple-touch-icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 180 180'%3E%3Crect width='180' height='180' rx='40' fill='%232d5a27'/%3E%3Ctext x='90' y='125' font-size='100' text-anchor='middle' fill='white' font-family='Arial'%3E🌿%3C/text%3E%3C/svg%3E">
<link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%232d5a27'/%3E%3Ctext x='16' y='24' font-size='20' text-anchor='middle' fill='white' font-family='Arial'%3E🌿%3C/text%3E%3C/svg%3E">
<link rel="manifest" href="data:application/json,%7B%22name%22%3A%22Richardson%20Outdoor%20Solutions%22%2C%22short_name%22%3A%22ROS%22%2C%22description%22%3A%22Field%20management%20app%22%2C%22start_url%22%3A%22.%22%2C%22display%22%3A%22standalone%22%2C%22background_color%22%3A%22%23f7f8f5%22%2C%22theme_color%22%3A%22%232d5a27%22%2C%22orientation%22%3A%22portrait%22%2C%22icons%22%3A%5B%7B%22src%22%3A%22data%3Aimage%2Fsvg%2Bxml%2C%253Csvg%2520xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%2520viewBox%3D'0%25200%2520192%2520192'%253E%253Crect%2520width%3D'192'%2520height%3D'192'%2520rx%3D'40'%2520fill%3D'%25232d5a27'%2F%253E%253Ctext%2520x%3D'96'%2520y%3D'140'%2520font-size%3D'120'%2520text-anchor%3D'middle'%2520fill%3D'white'%253E%25F0%259F%258C%25BF%253C%2Ftext%253E%253C%2Fsvg%253E%22%2C%22sizes%22%3A%22192x192%22%2C%22type%22%3A%22image%2Fsvg%2Bxml%22%7D%5D%7D">
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@2.44.0/tabler-icons.min.css">
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-tap-highlight-color:transparent}
:root{--green:#2d5a27;--gl:#4a8f3f;--gp:#e8f5e3;--amb:#c8860a;--ambp:#fef6e4;--red:#c0392b;--rp:#fdecea;--blue:#1565c0;--bp:#e3f0ff;--ink:#1a1a1a;--ink2:#444;--ink3:#777;--s:#fff;--s2:#f7f8f5;--s3:#eef0ea;--bd:#dde0d8;--r:10px;--rl:14px}
body{font-family:'DM Sans',sans-serif;background:var(--s2);color:var(--ink);min-height:100vh;padding-bottom:70px}

/* ── Nav ── */
.nav{position:fixed;bottom:0;left:0;right:0;background:var(--s);border-top:1px solid var(--bd);display:flex;z-index:50;max-width:600px;margin:0 auto}
.nav-btn{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:.5rem .25rem .6rem;gap:3px;cursor:pointer;border:none;background:none;color:var(--ink3);font-family:'DM Sans',sans-serif;font-size:10px;font-weight:600;letter-spacing:.02em;transition:color .15s}
.nav-btn.active{color:var(--green)}
.nav-btn i{font-size:22px}
.nav-indicator{width:4px;height:4px;border-radius:50%;background:var(--green);margin:0 auto;opacity:0}
.nav-btn.active .nav-indicator{opacity:1}

/* ── Page ── */
.page{display:none;max-width:600px;margin:0 auto;padding:1rem 1rem 1.5rem}
.page.active{display:block}
.page-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem}
.page-title{font-family:'Bebas Neue',sans-serif;font-size:28px;letter-spacing:.04em;color:var(--green);line-height:1}
.page-sub{font-size:12px;color:var(--ink3);margin-top:2px}

/* ── Cards ── */
.card{background:var(--s);border:1px solid var(--bd);border-radius:var(--rl);padding:1rem 1.125rem;margin-bottom:.875rem;box-shadow:0 1px 3px rgba(0,0,0,.04)}
.card-title{font-family:'Bebas Neue',sans-serif;font-size:14px;letter-spacing:.08em;color:var(--ink3);margin-bottom:.875rem}

/* ── Buttons ── */
.btn{height:40px;padding:0 16px;border-radius:var(--r);border:1px solid var(--bd);background:var(--s);color:var(--ink);font-size:13px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:6px;font-family:'DM Sans',sans-serif;transition:all .15s;white-space:nowrap;-webkit-appearance:none}
.btn:active{transform:scale(.97)}
.btng{background:var(--green);color:#fff;border-color:var(--green)}.btng:active{background:var(--gl)}
.btnr{background:var(--rp);color:var(--red);border-color:#f0c0bc}
.btna{background:var(--amb);color:#fff;border-color:var(--amb)}
.btnb{background:var(--blue);color:#fff;border-color:var(--blue)}
.btn-ghost{background:transparent;border-color:transparent;color:var(--ink3)}
.bsm{height:32px;padding:0 12px;font-size:12px}
.bxsm{height:26px;padding:0 8px;font-size:11px}

/* ── Forms ── */
.f{display:flex;flex-direction:column;gap:4px;flex:1;min-width:100px}
.f label{font-size:11px;font-weight:600;color:var(--ink3);text-transform:uppercase;letter-spacing:.05em}
.f input,.f select,.f textarea{border-radius:var(--r);border:1px solid var(--bd);background:var(--s2);color:var(--ink);padding:0 10px;font-size:14px;font-family:'DM Sans',sans-serif;width:100%;height:38px;-webkit-appearance:none}
.f textarea{height:auto;padding:.625rem 10px;resize:none}
.f input:focus,.f select:focus,.f textarea:focus{outline:none;border-color:var(--gl);background:#fff}
.fr{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:.75rem}

/* ── Tags ── */
.tag{font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;display:inline-block;text-transform:uppercase;letter-spacing:.04em}
.tag-green{background:var(--gp);color:var(--green)}
.tag-amb{background:var(--ambp);color:var(--amb)}
.tag-red{background:var(--rp);color:var(--red)}
.tag-blue{background:var(--bp);color:var(--blue)}
.tag-gray{background:var(--s3);color:var(--ink3)}

/* ── Dashboard ── */
.dash-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:1rem}
.dash-card{background:var(--s);border:1px solid var(--bd);border-radius:var(--rl);padding:1rem;text-align:center}
.dash-val{font-family:'Bebas Neue',sans-serif;font-size:36px;color:var(--green);line-height:1}
.dash-lbl{font-size:11px;color:var(--ink3);text-transform:uppercase;letter-spacing:.05em;margin-top:3px}
.week-strip{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin-bottom:1rem}
.week-day{background:var(--s);border:1px solid var(--bd);border-radius:8px;padding:.5rem .25rem;text-align:center;cursor:pointer;transition:all .15s}
.week-day.has-jobs{border-color:var(--green);background:var(--gp)}
.week-day.today{border-color:var(--amb);background:var(--ambp)}
.week-day.selected{background:var(--green);border-color:var(--green)}
.week-day.selected .wd-name,.week-day.selected .wd-num,.week-day.selected .wd-dot{color:#fff!important}
.wd-name{font-size:9px;font-weight:700;text-transform:uppercase;color:var(--ink3)}
.wd-num{font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--ink);line-height:1}
.wd-dot{font-size:8px;color:var(--green);min-height:10px}

/* ── Customer cards ── */
.cust-card{background:var(--s);border:1px solid var(--bd);border-radius:var(--rl);margin-bottom:.75rem;overflow:hidden}
.cust-hdr{display:flex;align-items:center;gap:12px;padding:.875rem 1rem;cursor:pointer}
.cust-avatar{width:40px;height:40px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:18px;flex-shrink:0}
.cust-info{flex:1;min-width:0}
.cust-name{font-weight:600;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cust-meta{font-size:12px;color:var(--ink3);margin-top:2px}
.cust-body{display:none;padding:.875rem 1rem 1rem;border-top:1px solid var(--s3)}
.cust-card.open .cust-body{display:block}
.detail-grid{display:grid;grid-template-columns:1fr 1fr;gap:.625rem;margin-bottom:.875rem}
.detail-item .dl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);margin-bottom:2px}
.detail-item .dv{font-size:14px;font-weight:500}

/* ── Schedule ── */
.sched-row{display:flex;align-items:center;gap:10px;padding:.75rem 0;border-bottom:1px solid var(--s3)}
.sched-row:last-child{border-bottom:none}
.sched-num{width:30px;height:30px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:15px;flex-shrink:0}
.sched-info{flex:1;min-width:0}
.sched-name{font-weight:600;font-size:14px}
.sched-detail{font-size:12px;color:var(--ink3);margin-top:2px}
.sched-right{text-align:right;flex-shrink:0}
.sched-time{font-family:'Bebas Neue',sans-serif;font-size:18px;color:var(--green);line-height:1}
.sched-timelbl{font-size:10px;color:var(--ink3);text-transform:uppercase}
.drive-row{display:flex;align-items:center;gap:6px;padding:.2rem 0 .2rem 14px;font-size:11px;color:var(--ink3)}
.drive-line{width:1px;height:14px;background:var(--bd);margin-left:14px}

/* ── Job tracker ── */
.job-card{background:var(--s);border:1.5px solid var(--bd);border-radius:var(--rl);margin-bottom:.875rem;overflow:hidden;transition:border-color .2s,box-shadow .2s}
.job-card.active{border-color:var(--green);box-shadow:0 0 0 3px rgba(45,90,39,.1)}
.job-card.done{border-color:#b8d5b4;background:#f9fdf8}
.job-hdr{display:flex;align-items:center;gap:12px;padding:.875rem 1rem;cursor:pointer}
.job-num2{width:34px;height:34px;border-radius:50%;background:var(--s2);color:var(--ink3);display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:17px;flex-shrink:0}
.job-card.active .job-num2{background:var(--green);color:#fff}
.job-card.done .job-num2{background:var(--gl);color:#fff}
.job-meta2{flex:1;min-width:0}
.job-name2{font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.job-addr2{font-size:12px;color:var(--ink3);margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jstat{font-size:10px;font-weight:700;padding:2px 8px;border-radius:99px;flex-shrink:0;white-space:nowrap;text-transform:uppercase;letter-spacing:.03em}
.js-p{background:var(--s2);color:var(--ink3)}
.js-a{background:var(--gp);color:var(--green)}
.js-d{background:#d4edda;color:#155724}
.job-body2{display:none;padding:.875rem 1rem 1rem;border-top:1px solid var(--s3)}
.job-card.active .job-body2,.job-card.done .job-body2,.job-card.exp .job-body2{display:block}
.timer-big{font-family:'Bebas Neue',sans-serif;font-size:56px;letter-spacing:.04em;color:var(--green);line-height:1}
.timer-big.paused{color:var(--amb)}
.timer-big.fin{color:#888}
.photo-req-badge{font-size:11px;font-weight:600;padding:2px 8px;border-radius:99px}
.prb-need{background:var(--rp);color:var(--red)}
.prb-done{background:var(--gp);color:var(--green)}
.photo-section{margin-bottom:.875rem}
.photo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:.5rem}
.pthumb{width:100%;aspect-ratio:1;object-fit:cover;border-radius:8px;border:1px solid var(--bd);cursor:pointer;display:block}
.photo-add-btn{height:36px;border-radius:8px;border:1.5px dashed var(--bd);display:flex;align-items:center;justify-content:center;gap:6px;cursor:pointer;background:var(--s2);font-size:12px;font-weight:600;color:var(--ink3);width:100%;font-family:'DM Sans',sans-serif}
.photo-add-btn:active{background:var(--gp);border-color:var(--gl)}
.req-warn{background:#fff8e1;border:1px solid #ffc107;border-radius:10px;padding:.75rem;margin-bottom:.75rem;font-size:13px;color:#856404;display:flex;gap:8px;align-items:flex-start}
.req-warn i{font-size:18px;flex-shrink:0}
.sum-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:.875rem}
.sum-box{background:var(--s2);border-radius:var(--r);padding:.75rem;text-align:center;border:1px solid var(--bd)}
.sum-v{font-family:'Bebas Neue',sans-serif;font-size:22px;color:var(--green);line-height:1}
.sum-l{font-size:10px;color:var(--ink3);text-transform:uppercase;letter-spacing:.04em;margin-top:2px}
.notes-area{width:100%;border-radius:var(--r);border:1px solid var(--bd);background:var(--s2);color:var(--ink);padding:.625rem 10px;font-size:14px;font-family:'DM Sans',sans-serif;resize:none;min-height:72px}
.notes-area:focus{outline:none;border-color:var(--gl);background:#fff}
.est-info{font-size:12px;color:var(--ink3);display:flex;gap:12px;flex-wrap:wrap;padding:.4rem 0;margin-bottom:.625rem}

/* ── Photo viewer ── */
.pviewer{display:none;position:fixed;inset:0;background:#000;z-index:300;flex-direction:column;align-items:center;justify-content:center;padding:1rem}
.pviewer.open{display:flex}
.pviewer img{max-width:100%;max-height:68vh;object-fit:contain;border-radius:8px}
.pv-close{position:absolute;top:1rem;right:1rem;width:40px;height:40px;background:rgba(255,255,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;font-size:22px}
.pv-lbl{color:rgba(255,255,255,.6);font-size:12px;margin-top:.5rem}
.pv-btns{display:flex;gap:8px;margin-top:.875rem;flex-wrap:wrap;justify-content:center}

/* ── Modal ── */
.modal-bg{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:200;align-items:flex-end;justify-content:center}
.modal-bg.open{display:flex}
.modal{background:var(--s);border-radius:20px 20px 0 0;padding:1.5rem;width:100%;max-width:600px;max-height:92vh;overflow-y:auto;-webkit-overflow-scrolling:touch}
.modal-title{font-family:'Bebas Neue',sans-serif;font-size:24px;color:var(--green);margin-bottom:1rem;letter-spacing:.04em}
.modal-close{position:absolute;top:1rem;right:1rem}

/* ── Misc ── */
.spin{display:inline-block;width:14px;height:14px;border:2px solid rgba(0,0,0,.15);border-top-color:var(--green);border-radius:50%;animation:sp .7s linear infinite;vertical-align:-2px;margin-right:6px}
@keyframes sp{to{transform:rotate(360deg)}}
.divider{border:none;border-top:1px solid var(--s3);margin:.75rem 0}
.badge-warn{background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:.625rem .875rem;font-size:13px;color:#856404;margin-bottom:.875rem;display:flex;gap:8px;align-items:center}
.empty-state{text-align:center;padding:2.5rem 1rem;color:var(--ink3)}
.empty-state i{font-size:44px;display:block;margin-bottom:.875rem;opacity:.35;color:var(--green)}
.empty-state p{font-size:15px;font-weight:600;color:var(--ink2);margin-bottom:.25rem}
.empty-state small{font-size:13px}
.search-box{height:40px;border-radius:var(--r);border:1px solid var(--bd);background:var(--s);padding:0 12px 0 36px;font-size:14px;font-family:'DM Sans',sans-serif;width:100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23888' stroke-width='2'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cpath d='m21 21-4.35-4.35'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:10px center;margin-bottom:.875rem}
.search-box:focus{outline:none;border-color:var(--gl)}
.toggle-row{display:flex;align-items:center;justify-content:space-between;padding:.5rem 0}
.toggle{position:relative;width:44px;height:24px;flex-shrink:0}
.toggle input{opacity:0;width:0;height:0}
.toggle-slider{position:absolute;inset:0;background:var(--bd);border-radius:99px;cursor:pointer;transition:.3s}
.toggle-slider:before{content:'';position:absolute;width:18px;height:18px;left:3px;bottom:3px;background:#fff;border-radius:50%;transition:.3s}
.toggle input:checked+.toggle-slider{background:var(--green)}
.toggle input:checked+.toggle-slider:before{transform:translateX(20px)}
.pill-tabs{display:flex;gap:6px;margin-bottom:1rem;overflow-x:auto;padding-bottom:2px}
.pill-tab{height:32px;padding:0 14px;border-radius:99px;border:1px solid var(--bd);background:var(--s);color:var(--ink3);font-size:12px;font-weight:600;cursor:pointer;white-space:nowrap;font-family:'DM Sans',sans-serif}
.pill-tab.active{background:var(--green);color:#fff;border-color:var(--green)}

/* ── Weather widget ── */
.weather-card{background:linear-gradient(135deg,var(--green) 0%,#4a8f3f 100%);border:none;border-radius:var(--rl);padding:1rem 1.125rem;margin-bottom:.875rem;color:#fff;box-shadow:0 2px 8px rgba(45,90,39,.25)}
.weather-top{display:flex;align-items:center;justify-content:space-between}
.weather-temp{font-family:'Bebas Neue',sans-serif;font-size:52px;line-height:1;color:#fff}
.weather-icon{font-size:44px;opacity:.9}
.weather-desc{font-size:13px;font-weight:600;opacity:.85;margin-top:2px;text-transform:capitalize}
.weather-loc{font-size:11px;opacity:.6;margin-top:1px}
.weather-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-top:.875rem;padding-top:.875rem;border-top:1px solid rgba(255,255,255,.2)}
.weather-stat .wsl{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;opacity:.6;margin-bottom:2px}
.weather-stat .wsv{font-size:13px;font-weight:700}
.weather-loading{font-size:13px;opacity:.7;padding:.5rem 0;text-align:center}

/* ── Coord badge ── */
.coord-warn{display:inline-flex;align-items:center;gap:4px;background:#fff3cd;border:1px solid #ffc107;border-radius:6px;padding:1px 7px;font-size:10px;font-weight:700;color:#856404;margin-left:6px;vertical-align:middle}

/* ── Sort select ── */
.sort-select{height:28px;border-radius:99px;border:1px solid var(--bd);background:var(--s);font-size:11px;font-weight:600;padding:0 10px;font-family:'DM Sans',sans-serif;color:var(--ink3);cursor:pointer;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%23888'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;padding-right:22px}

/* ── History photos ── */
.hist-job{padding:.625rem 0;border-bottom:1px solid var(--s3)}
.hist-job:last-child{border-bottom:none}
.hist-photo-strip{display:flex;gap:6px;overflow-x:auto;padding:.375rem 0;-webkit-overflow-scrolling:touch}
.hist-thumb{width:64px;height:64px;border-radius:8px;object-fit:cover;flex-shrink:0;border:1px solid var(--bd);cursor:pointer}

/* ── Mileage ── */
.mile-badge{display:inline-flex;align-items:center;gap:5px;background:var(--bp);color:var(--blue);border-radius:8px;padding:.5rem .875rem;font-size:13px;font-weight:600;margin-bottom:.875rem}

/* ── Calendar ── */
.cal-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:1rem}
.cal-dow{font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);text-align:center;padding:.375rem 0}
.cal-cell{border-radius:8px;min-height:52px;padding:4px;cursor:pointer;border:1px solid transparent;transition:all .15s;position:relative;background:var(--s);border-color:var(--bd)}
.cal-cell.empty{background:transparent;border-color:transparent;cursor:default}
.cal-cell.today{border-color:var(--amb);background:var(--ambp)}
.cal-cell.has-jobs{border-color:var(--green);background:var(--gp)}
.cal-cell.selected{background:var(--green);border-color:var(--green)}
.cal-cell.selected .cal-num,.cal-cell.selected .cal-dots{color:#fff!important}
.cal-cell.past{opacity:.5}
.cal-num{font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--ink);line-height:1;display:block}
.cal-dots{display:flex;flex-wrap:wrap;gap:2px;margin-top:3px}
.cal-dot{width:5px;height:5px;border-radius:50%;background:var(--green);flex-shrink:0}
.cal-dot.paid{background:var(--gl)}
.cal-dot.unpaid{background:var(--red)}
.cal-day-panel{background:var(--s);border:1px solid var(--bd);border-radius:var(--rl);padding:1rem 1.125rem;margin-bottom:.875rem;min-height:80px}
.cal-day-title{font-family:'Bebas Neue',sans-serif;font-size:20px;color:var(--green);letter-spacing:.04em;margin-bottom:.625rem}
.cal-job-row{display:flex;align-items:center;gap:10px;padding:.5rem 0;border-bottom:1px solid var(--s3)}
.cal-job-row:last-child{border-bottom:none}
.cal-month-nav{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem}
.cal-month-title{font-family:'Bebas Neue',sans-serif;font-size:24px;letter-spacing:.04em;color:var(--ink)}
.cal-rev-badge{display:inline-flex;align-items:center;gap:4px;background:var(--gp);color:var(--green);border-radius:6px;padding:2px 8px;font-size:11px;font-weight:700}

/* ── Payment UI ── */
.pay-box{border-radius:var(--rl);border:2px solid var(--bd);padding:1rem;margin-bottom:.625rem;cursor:pointer;transition:all .15s;background:var(--s)}
.pay-box:active{transform:scale(.98)}
.pay-box.pay-cash{border-color:#b8d5b4}
.pay-box.pay-card{border-color:#b3c8f0}
.pay-box.pay-invoice{border-color:#f0d9a0}
.pay-box-icon{font-size:28px;margin-bottom:.375rem}
.pay-box-title{font-family:'Bebas Neue',sans-serif;font-size:18px;letter-spacing:.04em}
.pay-box-sub{font-size:11px;color:var(--ink3);margin-top:2px;line-height:1.4}
.pay-amount{font-family:'Bebas Neue',sans-serif;font-size:42px;color:var(--green);line-height:1;text-align:center;padding:.75rem 0}
.pay-confirm-card{background:var(--bp);border-radius:var(--rl);padding:1rem;margin-bottom:.875rem}
.pay-steps{counter-reset:step;margin-bottom:.875rem}
.pay-step{display:flex;align-items:flex-start;gap:10px;padding:.5rem 0;border-bottom:1px solid var(--s3);font-size:13px}
.pay-step:last-child{border-bottom:none}
.pay-step-num{width:22px;height:22px;border-radius:50%;background:var(--blue);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:13px;flex-shrink:0;margin-top:1px}
.pay-done-badge{background:var(--gp);border:1px solid var(--gl);border-radius:var(--rl);padding:.875rem;display:flex;align-items:center;gap:10px;margin-bottom:.875rem}
</style>
</head>
<body>

<!-- ══ DASHBOARD ══════════════════════════════════════════════════ -->
<div class="page active" id="pg-dash">
  <div style="max-width:600px;margin:0 auto;padding:1rem 1rem 0">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.25rem">
      <div>
        <div style="font-family:'Bebas Neue',sans-serif;font-size:26px;letter-spacing:.04em;color:var(--green);line-height:1">Richardson Outdoor Solutions</div>
        <div style="font-size:12px;color:var(--ink3)" id="dash-date"></div>
      </div>
      <div style="width:44px;height:44px;background:var(--green);border-radius:12px;display:flex;align-items:center;justify-content:center;flex-shrink:0">
        <i class="ti ti-steering-wheel" style="font-size:24px;color:#fff"></i>
      </div>
    </div>
  </div>
  <div class="page" style="display:block;padding-top:0">
    <!-- Weather widget -->
    <div class="weather-card" id="weather-card">
      <div class="weather-loading"><span class="spin" style="border-top-color:#fff;border-color:rgba(255,255,255,.3)"></span> Loading weather...</div>
    </div>

    <div class="dash-grid" id="dash-metrics"></div>
    <div class="card">
      <div class="card-title">This week</div>
      <div class="week-strip" id="week-strip"></div>
      <div id="day-jobs-list"></div>
    </div>
    <div class="card" id="unpaid-card" style="display:none">
      <div class="card-title">Unpaid jobs</div>
      <div id="unpaid-list"></div>
    </div>
    <div class="card">
      <div class="card-title">Quick actions</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        <button class="btn btng" onclick="goTab('plan');buildTodayRoute()"><i class="ti ti-route"></i> Plan Today</button>
        <button class="btn" onclick="goTab('track')"><i class="ti ti-device-mobile"></i> Field Tracker</button>
        <button class="btn" onclick="goTab('customers')"><i class="ti ti-users"></i> Customers</button>
        <button class="btn" onclick="openReportModal()"><i class="ti ti-chart-bar"></i> Reports</button>
        <button class="btn btna" onclick="openQuickJobModal()" style="grid-column:span 2"><i class="ti ti-plus"></i> Log One-Off Job</button>
      </div>
    </div>
  </div>
</div>

<!-- ══ ROUTE PLANNER ═══════════════════════════════════════════════ -->
<div class="page" id="pg-plan">
  <div class="page-hdr">
    <div><div class="page-title">Route Planner</div><div class="page-sub" id="plan-sub">Build today's route</div></div>
    <button class="btn bsm btng" onclick="buildTodayRoute()"><i class="ti ti-wand"></i> Auto-build</button>
  </div>
  <div id="maps-setup" class="card">
    <div class="card-title">Google Maps</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <div class="f"><label>API Key</label><input type="password" id="maps-key" placeholder="AIza..." autocomplete="off"></div>
      <button class="btn btng" style="margin-top:auto" onclick="initMaps()"><i class="ti ti-plug"></i> Connect</button>
    </div>
    <div id="maps-status" style="font-size:13px;margin-top:8px"></div>
  </div>
  <div class="card">
    <div class="card-title">Day settings</div>
    <div class="fr">
      <div class="f" style="flex:3;min-width:180px"><label>Home base</label><input type="text" id="plan-home" placeholder="539 Pioneer Rd, Sapulpa, OK 74066"></div>
      <div class="f" style="flex:0 0 105px"><label>Start time</label><input type="time" id="plan-start" value="07:00"></div>
      <div class="f" style="flex:0 0 105px"><label>Hours available</label><input type="number" id="plan-hours" value="8" min="1" max="16" step="0.5"></div>
    </div>
  </div>
  <div id="plan-loading" style="display:none;font-size:13px;color:var(--ink3);padding:.5rem 0"><span class="spin"></span> Getting drive times...</div>
  <div id="plan-metrics-wrap" style="display:none">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:.875rem" id="plan-metrics"></div>
  </div>
  <div id="plan-route-card" style="display:none" class="card">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.875rem;flex-wrap:wrap;gap:8px">
      <div class="card-title" style="margin:0">Today's route</div>
      <div style="display:flex;gap:6px;flex-wrap:wrap">
        <button class="btn bsm" onclick="optimizePlan()"><i class="ti ti-route"></i> Optimize</button>
        <button class="btn bsm" onclick="openMapsDir()"><i class="ti ti-map"></i> Maps</button>
        <button class="btn bsm btng" onclick="sendToTracker()"><i class="ti ti-device-mobile"></i> Send to Tracker</button>
        <button class="btn bsm btna" onclick="printRoute()"><i class="ti ti-printer"></i> PDF</button>
      </div>
    </div>
    <div id="plan-route-list"></div>
    <div id="plan-map-wrap" style="border-radius:var(--r);overflow:hidden;border:1px solid var(--bd);margin-top:.875rem;height:280px;display:none"><div id="plan-map" style="width:100%;height:100%"></div></div>
  </div>
  <div id="plan-jobs-card" class="card" style="display:none">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.875rem">
      <div class="card-title" style="margin:0">All stops</div>
      <button class="btn bsm btnr" onclick="clearPlan()"><i class="ti ti-trash"></i> Clear</button>
    </div>
    <div id="plan-jobs-list"></div>
  </div>
</div>

<!-- ══ FIELD TRACKER ═══════════════════════════════════════════════ -->
<div class="page" id="pg-track">
  <div class="page-hdr">
    <div><div class="page-title">Field Tracker</div><div class="page-sub" id="track-sub">No route loaded</div></div>
    <button class="btn bsm" onclick="openLoadModal()"><i class="ti ti-refresh"></i> Load</button>
  </div>
  <div id="track-empty" class="empty-state">
    <i class="ti ti-map-pin-off"></i>
    <p>No route loaded</p>
    <small>Plan your route first, then tap "Send to Tracker"</small>
    <div style="margin-top:1.25rem;display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn btng" style="width:auto" onclick="goTab('plan');buildTodayRoute()"><i class="ti ti-route"></i> Plan today</button>
      <button class="btn" style="width:auto" onclick="openLoadModal()"><i class="ti ti-clipboard"></i> Paste code</button>
    </div>
  </div>
  <div id="track-jobs"></div>
  <div id="track-export-wrap" style="display:none;margin-top:.5rem">
    <button class="btn btng" style="width:100%" onclick="exportDaySummary()"><i class="ti ti-package-export"></i> Export Day Summary + Photos</button>
  </div>
</div>

<!-- ══ CUSTOMERS ═══════════════════════════════════════════════════ -->
<div class="page" id="pg-customers">
  <div class="page-hdr">
    <div><div class="page-title">Customers</div><div class="page-sub" id="cust-count-lbl"></div></div>
    <div style="display:flex;gap:6px">
      <button class="btn bsm" onclick="openImportModal()"><i class="ti ti-file-spreadsheet"></i> Import</button>
      <button class="btn bsm btng" onclick="openCustModal()"><i class="ti ti-plus"></i> Add</button>
    </div>
  </div>
  <input type="text" class="search-box" id="cust-search" placeholder="Search customers..." oninput="renderCustomers()">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem;flex-wrap:wrap;gap:8px">
    <div class="pill-tabs" style="margin:0;flex:1">
      <button class="pill-tab active" onclick="setCustFilter('all',this)">All</button>
      <button class="pill-tab" onclick="setCustFilter('active',this)">Active</button>
      <button class="pill-tab" onclick="setCustFilter('weekly',this)">Weekly</button>
      <button class="pill-tab" onclick="setCustFilter('biweekly',this)">Biweekly</button>
      <button class="pill-tab" onclick="setCustFilter('inactive',this)">Inactive</button>
    </div>
    <select class="sort-select" id="cust-sort" onchange="renderCustomers()">
      <option value="recent">Recent</option>
      <option value="az">A–Z</option>
      <option value="day">By day</option>
      <option value="zip">By zip</option>
    </select>
  </div>
  <div id="cust-list"></div>
</div>

<!-- ══ REPORTS ═════════════════════════════════════════════════════ -->
<div class="page" id="pg-reports">
  <div class="page-hdr">
    <div><div class="page-title">Reports</div><div class="page-sub">Business overview</div></div>
    <select id="report-period" onchange="renderReports()" style="height:32px;border-radius:var(--r);border:1px solid var(--bd);background:var(--s);font-size:13px;padding:0 8px;font-family:'DM Sans',sans-serif">
      <option value="week">This week</option>
      <option value="month">This month</option>
      <option value="all">All time</option>
    </select>
  </div>
  <div id="report-content"></div>

  <!-- Stripe & Payment Settings -->
  <div class="card" style="margin-top:.5rem">
    <div class="card-title">Payment settings</div>
    <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">Configure Stripe payment links. Create these once in your <a href="https://dashboard.stripe.com/payment-links" target="_blank" style="color:var(--blue)">Stripe dashboard</a> and paste the links here.</p>
    <div class="fr">
      <div class="f"><label>Default payment link (any amount)</label><input type="url" id="st-default-link" placeholder="https://buy.stripe.com/..."></div>
    </div>
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);margin-bottom:.5rem;margin-top:.25rem">Price-specific links (optional — faster for common amounts)</div>
    <div id="stripe-price-links"></div>
    <button class="btn bsm" onclick="addStripePriceLink()" style="margin-bottom:.875rem"><i class="ti ti-plus"></i> Add price link</button>
    <div class="fr">
      <div class="f"><label>Business name (for texts)</label><input type="text" id="st-biz-name" placeholder="Richardson Outdoor Solutions"></div>
    </div>
    <button class="btn btng" onclick="saveStripeSettings()" style="width:100%"><i class="ti ti-check"></i> Save payment settings</button>
    <div id="stripe-save-msg" style="display:none;margin-top:.625rem;font-size:13px;color:var(--green);text-align:center"></div>
  </div>

  <!-- HubSpot Settings -->
  <div class="card" style="margin-top:.5rem">
    <div class="card-title">HubSpot integration</div>
    <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">When a cash/check payment is recorded, the app updates the customer's HubSpot contact with the last payment date and amount. Requires a Service Key with <code>crm.objects.contacts.write</code> scope.</p>
    <div class="fr">
      <div class="f"><label>HubSpot Private App token</label><input type="password" id="hs-key" placeholder="pat-na1-..." autocomplete="off"></div>
    </div>
    <button class="btn btng" onclick="saveHubSpotKey()" style="width:100%"><i class="ti ti-check"></i> Save HubSpot token</button>
    <div id="hs-save-msg" style="display:none;margin-top:.625rem;font-size:13px;color:var(--green);text-align:center"></div>
  </div>

  <!-- Deduplicate -->
  <div class="card" style="margin-top:.5rem">
    <div class="card-title">Deduplicate customers</div>
    <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">Scans for duplicate contacts (matched by phone number or full name) and merges them into a single record, keeping the most complete data. Also removes duplicates from Supabase. Shows you exactly what changed before saving.</p>
    <button class="btn btng" onclick="runDedup()" style="width:100%"><i class="ti ti-git-merge"></i> Scan & deduplicate now</button>
    <div id="dedup-result" style="display:none;margin-top:.875rem;border-radius:var(--r);padding:.875rem;font-size:13px;line-height:1.7"></div>
  </div>

  <!-- Backup & Restore -->
  <div class="card" style="margin-top:.5rem">
    <div class="card-title">Data backup & restore</div>
    <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">Back up all your customers, job history, and settings to a file. Save it to Google Drive or anywhere safe. Restore it any time if your data is ever lost.</p>
    <div id="backup-info" style="background:var(--s2);border-radius:var(--r);padding:.75rem 1rem;font-size:13px;color:var(--ink2);margin-bottom:.875rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
      <div id="backup-stats"></div>
      <div id="last-backup-lbl" style="font-size:11px;color:var(--ink3)"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
      <button class="btn btng" onclick="backupData()"><i class="ti ti-download"></i> Backup now</button>
      <button class="btn" onclick="document.getElementById('restore-file').click()"><i class="ti ti-upload"></i> Restore backup</button>
    </div>
    <input type="file" id="restore-file" accept=".json" style="display:none" onchange="restoreData(this)">
    <div id="restore-msg" style="display:none;margin-top:.75rem;border-radius:var(--r);padding:.75rem;font-size:13px"></div>
  </div>
</div>

<!-- ══ CALENDAR ════════════════════════════════════════════════════ -->
<div class="page" id="pg-cal">
  <div class="page-hdr">
    <div><div class="page-title">Calendar</div><div class="page-sub" id="cal-sub">Monthly schedule</div></div>
    <button class="btn bsm btng" onclick="goTab('plan');buildTodayRoute()"><i class="ti ti-route"></i> Plan today</button>
  </div>
  <div class="cal-month-nav">
    <button class="btn bsm" onclick="calPrevMonth()"><i class="ti ti-chevron-left"></i></button>
    <div class="cal-month-title" id="cal-month-title"></div>
    <button class="btn bsm" onclick="calNextMonth()"><i class="ti ti-chevron-right"></i></button>
  </div>
  <!-- Day of week headers -->
  <div class="cal-grid" id="cal-dow-row"></div>
  <!-- Calendar cells -->
  <div class="cal-grid" id="cal-cells"></div>
  <!-- Selected day panel -->
  <div class="cal-day-panel" id="cal-day-panel">
    <div style="color:var(--ink3);font-size:13px;text-align:center;padding:1rem 0">Tap a day to see jobs</div>
  </div>
  <!-- Month summary -->
  <div class="card" id="cal-month-summary" style="display:none">
    <div class="card-title">Month summary</div>
    <div id="cal-summary-content"></div>
  </div>
</div>

<!-- ══ NAV ═════════════════════════════════════════════════════════ -->
<nav class="nav" style="left:50%;transform:translateX(-50%);max-width:600px">
  <button class="nav-btn active" onclick="goTab('dash')" id="nav-dash"><i class="ti ti-home"></i><span>Home</span><div class="nav-indicator"></div></button>
  <button class="nav-btn" onclick="goTab('plan')" id="nav-plan"><i class="ti ti-route"></i><span>Route</span><div class="nav-indicator"></div></button>
  <button class="nav-btn" onclick="goTab('track')" id="nav-track"><i class="ti ti-device-mobile"></i><span>Field</span><div class="nav-indicator"></div></button>
  <button class="nav-btn" onclick="goTab('cal')" id="nav-cal"><i class="ti ti-calendar"></i><span>Calendar</span><div class="nav-indicator"></div></button>
  <button class="nav-btn" onclick="goTab('customers')" id="nav-customers"><i class="ti ti-users"></i><span>Clients</span><div class="nav-indicator"></div></button>
  <button class="nav-btn" onclick="goTab('reports')" id="nav-reports"><i class="ti ti-chart-bar"></i><span>Reports</span><div class="nav-indicator"></div></button>
</nav>

<!-- ══ MODALS ══════════════════════════════════════════════════════ -->
<!-- Customer modal -->
<div class="modal-bg" id="cust-modal" onclick="handleModalBg(event,'cust-modal')">
<div class="modal">
  <div class="modal-title" id="cust-modal-title">Add Customer</div>
  <input type="hidden" id="cust-edit-id">
  <div class="fr"><div class="f" style="flex:1"><label>First name</label><input type="text" id="cf-first" placeholder="Angela"></div><div class="f" style="flex:1"><label>Last name</label><input type="text" id="cf-last" placeholder="Schafer"></div></div>
  <div class="fr"><div class="f"><label>Street address</label><input type="text" id="cf-addr" placeholder="3342 Westgreen Way"></div><div class="f" style="flex:0 0 90px"><label>Zip</label><input type="text" id="cf-zip" placeholder="74066" maxlength="10"></div></div>
  <div class="fr"><div class="f"><label>Phone</label><input type="tel" id="cf-phone" placeholder="+1 (918) 000-0000"></div><div class="f"><label>Email</label><input type="email" id="cf-email" placeholder="email@example.com"></div></div>
  <div class="fr">
    <div class="f" style="flex:0 0 130px"><label>Schedule</label>
      <select id="cf-sched">
        <option value="weekly">Weekly</option>
        <option value="biweekly">Biweekly</option>
        <option value="onetime">One-time</option>
        <option value="paused">Paused</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
    <div class="f" style="flex:0 0 120px"><label>Preferred day</label><select id="cf-day"><option value="0">Sunday</option><option value="1">Monday</option><option value="2">Tuesday</option><option value="3">Wednesday</option><option value="4">Thursday</option><option value="5">Friday</option><option value="6">Saturday</option></select></div>
    <div class="f" style="flex:0 0 130px"><label>Start date</label><input type="date" id="cf-start-date" placeholder="First service date"></div>
    <div class="f" style="flex:0 0 100px"><label>Price ($)</label><input type="number" id="cf-price" placeholder="65" min="0" step="0.01"></div>
  </div>
  <div id="cf-biweekly-row" class="fr" style="display:none">
    <div class="f" style="flex:0 0 140px"><label>Biweekly week</label>
      <select id="cf-biweekly-week">
        <option value="A">Week A (calculated from start date)</option>
        <option value="B">Week B (offset by 1 week)</option>
      </select>
    </div>
    <div style="flex:1;font-size:11px;color:var(--ink3);padding-top:20px;line-height:1.5">Set start date first — the app calculates Week A automatically. Flip to Week B to shift their cycle by one week.</div>
  </div>
  <div id="cf-pause-row" class="fr" style="display:none">
    <div class="f" style="flex:0 0 140px"><label>Resume date</label><input type="date" id="cf-resume"></div>
    <div class="f"><label>Pause reason</label><input type="text" id="cf-pause-reason" placeholder="Vacation, construction..."></div>
  </div>
  <div class="fr">
    <div class="f" style="flex:0 0 100px"><label>Est. mow (min)</label><input type="number" id="cf-mow" value="45" min="5" max="300"></div>
    <div class="f" style="flex:0 0 90px"><label>Yard size</label><select id="cf-size"><option value="sm">Small</option><option value="md" selected>Medium</option><option value="lg">Large</option></select></div>
    <div class="f" style="flex:0 0 130px"><label>Service type</label>
      <select id="cf-service">
        <option value="mow">Mow only</option>
        <option value="mow_edge">Mow + Edge</option>
        <option value="full">Mow + Edge + Blow</option>
        <option value="cleanup">Full cleanup</option>
      </select>
    </div>
  </div>
  <div class="fr"><div class="f"><label>Gate code / access notes</label><input type="text" id="cf-gate" placeholder="Gate code #1234, dog in backyard..."></div></div>
  <div class="fr">
    <div class="f"><label>HubSpot contact URL</label><input type="url" id="cf-hubspot" placeholder="https://app.hubspot.com/contacts/..."></div>
  </div>
  <div class="fr">
    <div class="f" style="flex:0 0 150px"><label>HubSpot contact ID</label><input type="text" id="cf-hubspot-id" placeholder="12345678"></div>
    <div class="f" style="flex:0 0 170px"><label>Stripe customer ID</label><input type="text" id="cf-stripe-id" placeholder="cus_ABC123..."></div>
  </div>
  <div class="fr">
    <div class="f" style="flex:0 0 150px"><label>Payment method</label>
      <select id="cf-paymethod">
        <option value="cash">Cash / Check</option>
        <option value="card">Charge card (Stripe)</option>
        <option value="invoice">Send invoice link</option>
      </select>
    </div>
    <div class="f"><label>Custom payment link (overrides default)</label><input type="url" id="cf-paylink" placeholder="https://buy.stripe.com/..."></div>
  </div>
  <div class="fr" style="margin-bottom:1rem">
    <div class="f"><label>Additional notes</label><textarea id="cf-notes" rows="2" placeholder="Anything else to know..."></textarea></div>
  </div>
  <div style="display:flex;gap:8px">
    <button class="btn btng" onclick="saveCust()" style="flex:1"><i class="ti ti-check"></i> Save</button>
    <button class="btn" onclick="closeModal('cust-modal')">Cancel</button>
  </div>
</div>
</div>

<!-- Import modal -->
<div class="modal-bg" id="import-modal" onclick="handleModalBg(event,'import-modal')">
<div class="modal">
  <div class="modal-title">Import from HubSpot</div>
  <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">Drop your HubSpot .xlsx export. Merges Street Address + Zipcode columns automatically.</p>
  <div id="import-dz" style="border:2px dashed var(--bd);border-radius:var(--rl);padding:2rem;text-align:center;cursor:pointer;background:var(--s2);margin-bottom:.875rem" onclick="document.getElementById('import-file').click()" ondragover="event.preventDefault();this.style.borderColor='var(--gl)'" ondragleave="this.style.borderColor='var(--bd)'" ondrop="handleImportDrop(event)">
    <i class="ti ti-file-spreadsheet" style="font-size:36px;color:var(--gl);display:block;margin-bottom:.5rem"></i>
    <p style="font-size:14px;font-weight:500;color:var(--ink2)">Drop .xlsx file or tap to browse</p>
  </div>
  <input type="file" id="import-file" accept=".xlsx" style="display:none" onchange="handleImportFile(this.files[0])">
  <div id="import-preview" style="display:none">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.5rem;flex-wrap:wrap;gap:8px">
      <span style="font-size:13px;color:var(--ink3)" id="import-count"></span>
      <div style="display:flex;gap:8px">
        <button class="btn bsm" onclick="selAllImport()"><i class="ti ti-check"></i> All</button>
        <button class="btn bsm btnr" onclick="deselAllImport()"><i class="ti ti-x"></i> None</button>
        <button class="btn bsm btng" onclick="doImport()"><i class="ti ti-plus"></i> Import selected</button>
      </div>
    </div>
    <div style="overflow-x:auto">
      <table style="width:100%;border-collapse:collapse;font-size:12px" id="import-table">
        <thead><tr style="border-bottom:2px solid var(--bd)">
          <th style="padding:6px 8px;text-align:left"><input type="checkbox" id="imp-all-cb" onchange="togAllImport(this.checked)" checked></th>
          <th style="padding:6px 8px;text-align:left;color:var(--ink3);font-weight:600;text-transform:uppercase;letter-spacing:.04em">Name</th>
          <th style="padding:6px 8px;text-align:left;color:var(--ink3);font-weight:600;text-transform:uppercase;letter-spacing:.04em">Address</th>
          <th style="padding:6px 8px;text-align:left;color:var(--ink3);font-weight:600;text-transform:uppercase;letter-spacing:.04em">Phone</th>
          <th style="padding:6px 8px;text-align:left;color:var(--ink3);font-weight:600;text-transform:uppercase;letter-spacing:.04em">HS ID</th>
        </tr></thead>
        <tbody id="import-tbody"></tbody>
      </table>
    </div>
  </div>
  <div style="margin-top:.875rem"><button class="btn" onclick="closeModal('import-modal')" style="width:100%">Close</button></div>
</div>
</div>

<!-- Load route modal -->
<div class="modal-bg" id="load-modal" onclick="handleModalBg(event,'load-modal')">
<div class="modal">
  <div class="modal-title">Load Route</div>
  <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem">Paste the route code from the Route Planner.</p>
  <div id="load-error" style="background:var(--rp);border:1px solid #f0c0bc;border-radius:8px;padding:.75rem;font-size:13px;color:var(--red);margin-bottom:.75rem;display:none"></div>
  <textarea id="load-code" style="width:100%;height:100px;border-radius:var(--r);border:1px solid var(--bd);background:var(--s2);padding:.75rem;font-size:12px;font-family:monospace;resize:none;margin-bottom:.875rem" placeholder='{"date":...' spellcheck="false" autocorrect="off" autocapitalize="off"></textarea>
  <div style="display:flex;gap:8px">
    <button class="btn btng" onclick="loadRouteFromCode()" style="flex:1"><i class="ti ti-check"></i> Load</button>
    <button class="btn" onclick="closeModal('load-modal')" style="width:80px">Cancel</button>
  </div>
</div>
</div>

<!-- Report modal -->
<div class="modal-bg" id="report-modal" onclick="handleModalBg(event,'report-modal')">
<div class="modal" style="max-height:80vh;overflow-y:auto">
  <div class="modal-title">Business Report</div>
  <div id="report-modal-content"></div>
  <button class="btn" onclick="closeModal('report-modal')" style="width:100%;margin-top:1rem">Close</button>
</div>
</div>

<!-- Quick-add job modal -->
<div class="modal-bg" id="quickjob-modal" onclick="handleModalBg(event,'quickjob-modal')">
<div class="modal">
  <div class="modal-title">Log One-Off Job</div>
  <p style="font-size:13px;color:var(--ink3);margin-bottom:.875rem;line-height:1.6">Record a job that wasn't on your route — a last-minute call, extra service, or anything outside your normal schedule.</p>
  <div class="fr">
    <div class="f"><label>Customer</label>
      <select id="qj-cust">
        <option value="">— select customer —</option>
      </select>
    </div>
  </div>
  <div class="fr">
    <div class="f" style="flex:0 0 140px"><label>Date</label><input type="date" id="qj-date"></div>
    <div class="f" style="flex:0 0 110px"><label>Time (min)</label><input type="number" id="qj-mins" value="45" min="1" max="600"></div>
    <div class="f" style="flex:0 0 100px"><label>Price ($)</label><input type="number" id="qj-price" placeholder="65" min="0" step="0.01"></div>
  </div>
  <div class="fr">
    <div class="f" style="flex:0 0 130px"><label>Payment</label>
      <select id="qj-paid">
        <option value="unpaid">Unpaid</option>
        <option value="cash">Paid — Cash</option>
        <option value="check">Paid — Check</option>
        <option value="other">Paid — Other</option>
      </select>
    </div>
  </div>
  <div class="fr" style="margin-bottom:1rem">
    <div class="f"><label>Notes</label><textarea id="qj-notes" rows="2" placeholder="What was done, any extras..."></textarea></div>
  </div>
  <div style="display:flex;gap:8px">
    <button class="btn btng" onclick="saveQuickJob()" style="flex:1"><i class="ti ti-check"></i> Save job</button>
    <button class="btn" onclick="closeModal('quickjob-modal')">Cancel</button>
  </div>
</div>
</div>

<!-- Photo viewer -->
<div class="pviewer" id="pviewer">
  <div class="pv-close" onclick="closePV()"><i class="ti ti-x"></i></div>
  <img id="pv-img" src="" alt="">
  <div class="pv-lbl" id="pv-lbl"></div>
  <div class="pv-btns">
    <button class="btn btng" style="width:auto" onclick="dlPhoto()"><i class="ti ti-download"></i> Save</button>
    <button class="btn btnr" style="width:auto" onclick="delPhoto()"><i class="ti ti-trash"></i> Delete</button>
    <button class="btn" style="width:auto;background:rgba(255,255,255,.15);color:#fff;border-color:rgba(255,255,255,.3)" onclick="closePV()">Close</button>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
// ══ SUPABASE CONFIG ══════════════════════════════════════════════
const SUPABASE_URL = 'https://xltpnadijzbiigqmqmyx.supabase.co';
const SUPABASE_KEY = 'sb_publishable_wI6su8ryt_sN2w1v976zcg_RJRlbX5E';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function isUuid(value){
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(String(value||''));
}

function makeUuid(){
  if(window.crypto && window.crypto.randomUUID){
    return window.crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(c){
    const r=Math.random()*16|0,v=c==='x'?r:(r&0x3|0x8);
    return v.toString(16);
  });
}

function safeParseJSON(str,fallback){
  try{return JSON.parse(str||'null')||fallback;}catch(e){return fallback;}
}

// ══ DATA STORE ═══════════════════════════════════════════════════
let DB = {
  customers: [],
  jobHistory: [],
  settings: {mapsKey:'',homeBase:'',startTime:'07:00',hours:8}
};

async function saveDB(){
  try{
    localStorage.setItem('ros_db',JSON.stringify(DB));
  }catch(e){
    console.log('Local save error',e);
  }

  try{
    for(const customer of DB.customers){
      if(!isUuid(customer.id)){
        customer.id=makeUuid();
      }
      const {error}=await supabaseClient
        .from('customers')
        .upsert({
          id: customer.id,
          first: customer.first||'',
          last: customer.last||'',
          addr: customer.addr||'',
          zip: customer.zip||'',
          phone: customer.phone||'',
          email: customer.email||'',
          sched: customer.sched||'weekly',
          day: parseInt(customer.day||0),
          price: customer.price===''||customer.price==null?0:parseFloat(customer.price),
          mowtime: customer.mowTime===''||customer.mowTime==null?45:parseInt(customer.mowTime),
          size: customer.size||'md',
          gate: customer.gate||'',
          notes: customer.notes||'',
          hubspot_url: customer.hubspotUrl||'',
          hubspot_contact_id: customer.hubspotContactId||'',
          stripe_customer_id: customer.stripeCustomerId||'',
          pay_method: customer.payMethod||'cash',
          pay_link: customer.payLink||'',
          service_type: customer.serviceType||'mow',
          resume_date: customer.resumeDate||null,
          pause_reason: customer.pauseReason||'',
          start_date: customer.startDate||null,
          biweekly_week: customer.biweeklyWeek||'A',
          skip_weeks: JSON.stringify(customer.skipWeeks||[])
        });
      if(error){ console.log('Supabase save error',error); }
    }
  }catch(err){
    console.log('Supabase sync error',err);
  }

  // Sync job history to Supabase — store URLs only (not base64 blobs)
  try{
    for(const job of DB.jobHistory){
      if(!isUuid(job.id)){job.id=makeUuid();}
      const {error}=await supabaseClient
        .from('job_history')
        .upsert({
          id: job.id,
          cust_id: job.custId,
          date: job.date,
          actual_min: job.actualMin||0,
          est_min: job.estMin||0,
          paid: job.paid||false,
          paid_method: job.paidMethod||null,
          notes: job.notes||'',
          is_one_off: job.isOneOff||false,
          // Store URLs in the URL columns (empty array if not yet uploaded)
          before_photo_urls: JSON.stringify(job.beforePhotoUrls||[]),
          after_photo_urls: JSON.stringify(job.afterPhotoUrls||[]),
          extra_photo_urls: JSON.stringify(job.extraPhotoUrls||[]),
          // Keep base64 columns for backwards compatibility with old records
          before_photos: JSON.stringify((job.beforePhotos||[]).map(p=>isBase64Photo(p)?'[uploaded]':p)),
          after_photos: JSON.stringify((job.afterPhotos||[]).map(p=>isBase64Photo(p)?'[uploaded]':p)),
          extra_photos: JSON.stringify((job.extraPhotos||[]).map(p=>isBase64Photo(p)?'[uploaded]':p))
        });
      if(error&&error.code!=='42P01'){console.log('Job history sync error',error);}
    }
  }catch(err){
    console.log('Job history sync error',err);
  }
}

async function loadDB(){
  try{
    const d=localStorage.getItem('ros_db');
    if(d){
      const p=JSON.parse(d);
      DB=Object.assign({customers:[],jobHistory:[],settings:{mapsKey:'',homeBase:'',startTime:'07:00',hours:8}},p);
    }
  }catch(e){
    console.log('Local load error',e);
  }

  try{
    const custPromise=supabaseClient
      .from('customers')
      .select('*')
      .order('created_at',{ascending:true});
    const custTimeout=new Promise((_,reject)=>setTimeout(()=>reject(new Error('timeout')),5000));
    const {data,error}=await Promise.race([custPromise,custTimeout]);
    if(error){ console.log('Supabase load error',error); return; }
    if(data && data.length){
      DB.customers=data.map(c=>({
        id:c.id,
        first:c.first||'',
        last:c.last||'',
        addr:c.addr||'',
        zip:c.zip||'',
        phone:c.phone||'',
        email:c.email||'',
        sched:c.sched||'weekly',
        day:String(c.day??0),
        price:c.price??'',
        mowTime:c.mowtime??45,
        size:c.size||'md',
        gate:c.gate||'',
        notes:c.notes||'',
        hubspotUrl:c.hubspot_url||'',
        hubspotContactId:c.hubspot_contact_id||'',
        stripeCustomerId:c.stripe_customer_id||'',
        payMethod:c.pay_method||'cash',
        payLink:c.pay_link||'',
        serviceType:c.service_type||'mow',
        resumeDate:c.resume_date||null,
        pauseReason:c.pause_reason||'',
        startDate:c.start_date||null,
        biweeklyWeek:c.biweekly_week||'A',
        skipWeeks:safeParseJSON(c.skip_weeks,[])
      }));
      localStorage.setItem('ros_db',JSON.stringify(DB));
    }
  }catch(err){
    console.log('Supabase load error',err);
  }

  // Load job history from Supabase in background (non-blocking)
  // Wrapped in Promise.race with timeout so it never freezes the app
  try{
    const jobHistoryPromise=supabaseClient
      .from('job_history')
      .select('*')
      .order('date',{ascending:false});
    const timeoutPromise=new Promise((_,reject)=>setTimeout(()=>reject(new Error('timeout')),5000));
    const {data:jdata,error:jerror}=await Promise.race([jobHistoryPromise,timeoutPromise]);
    if(!jerror&&jdata&&jdata.length){
      const cloudJobs=jdata.map(j=>({
        id:j.id,
        custId:j.cust_id,
        date:j.date,
        actualMin:j.actual_min||0,
        estMin:j.est_min||0,
        paid:j.paid||false,
        paidMethod:j.paid_method||null,
        notes:j.notes||'',
        isOneOff:j.is_one_off||false,
        // Prefer URL arrays; fall back to base64 for old records
        beforePhotoUrls:safeParseJSON(j.before_photo_urls,[]),
        afterPhotoUrls:safeParseJSON(j.after_photo_urls,[]),
        extraPhotoUrls:safeParseJSON(j.extra_photo_urls,[]),
        // Keep base64 locally for backwards compat but don't re-push to DB
        beforePhotos:safeParseJSON(j.before_photos,[]).filter(p=>p!=='[uploaded]'),
        afterPhotos:safeParseJSON(j.after_photos,[]).filter(p=>p!=='[uploaded]'),
        extraPhotos:safeParseJSON(j.extra_photos,[]).filter(p=>p!=='[uploaded]')
      }));
      // Merge: cloud wins for any job that exists in both, keep local-only entries
      const cloudIds=new Set(cloudJobs.map(j=>j.id));
      const localOnly=DB.jobHistory.filter(j=>!cloudIds.has(j.id));
      DB.jobHistory=[...cloudJobs,...localOnly];
      localStorage.setItem('ros_db',JSON.stringify(DB));
    }
  }catch(err){
    console.log('Job history load error',err);
  }
}

// ══ NAVIGATION ════════════════════════════════════════════════════
const TABS=['dash','plan','track','cal','customers','reports'];
function goTab(t){
  TABS.forEach(id=>{
    document.getElementById('pg-'+id).classList.toggle('active',id===t);
    document.getElementById('nav-'+id).classList.toggle('active',id===t);
  });
  if(t==='dash')renderDash();
  if(t==='cal')renderCalendar();
  if(t==='customers')renderCustomers();
  if(t==='reports'){renderReports();updateBackupStats();loadStripeSettingsUI();loadHubSpotKeyUI();}
}

// ══ HELPERS ═══════════════════════════════════════════════════════
function uid(){return makeUuid();}
function pad(n){return n<10?'0'+n:String(n);}
function fmtTimer(s){const h=Math.floor(s/3600),m=Math.floor((s%3600)/60),sc=s%60;return h>0?h+':'+pad(m)+':'+pad(sc):pad(m)+':'+pad(sc);}
function fmtMins(m){if(!m||m<=0)return '0m';const h=Math.floor(m/60),mn=m%60;return h>0?h+'h'+(mn>0?' '+mn+'m':''):mn+'m';}
function fmtClock(tm){const h=Math.floor(tm/60)%24,m=tm%60,ap=h>=12?'PM':'AM',hh=h%12===0?12:h%12;return hh+':'+pad(m)+' '+ap;}
function fmtDate(d){return new Date(d).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'});}
function todayStr(){return new Date().toISOString().slice(0,10);}
function custFullName(c){return (c.first+' '+c.last).trim();}
function custAddr(c){return c.addr+(c.zip?', '+c.zip:'');}
function initials(c){return ((c.first||'')[0]||'')+(( c.last||'')[0]||'').toUpperCase();}
const DAYS=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAYS_FULL=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// ══ DASHBOARD ════════════════════════════════════════════════════
let selectedDayOffset=0;
function renderDash(){
  document.getElementById('dash-date').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  fetchWeather();
  const active=DB.customers.filter(c=>c.sched!=='inactive');
  const todayJobs=getDayJobs(0);
  const monthRevenue=getMonthRevenue();
  const unpaid=DB.jobHistory.filter(j=>!j.paid);
  document.getElementById('dash-metrics').innerHTML=
    `<div class="dash-card"><div class="dash-val">${active.length}</div><div class="dash-lbl">Active clients</div></div>`+
    `<div class="dash-card"><div class="dash-val">${todayJobs.length}</div><div class="dash-lbl">Jobs today</div></div>`+
    `<div class="dash-card"><div class="dash-val">$${monthRevenue.toFixed(0)}</div><div class="dash-lbl">This month</div></div>`+
    `<div class="dash-card"><div class="dash-val" style="color:${unpaid.length>0?'var(--red)':'var(--green)'}">${unpaid.length}</div><div class="dash-lbl">Unpaid</div></div>`;
  renderWeekStrip();
  renderDayJobs();
  renderUnpaid();
}

function getWeekJobs(weekOffset){
  const today=new Date();today.setHours(0,0,0,0);
  const monday=new Date(today);monday.setDate(today.getDate()-(today.getDay()||7)+1+weekOffset*7);
  const sunday=new Date(monday);sunday.setDate(monday.getDate()+6);
  return DB.customers.filter(c=>isDueInRange(c,monday,sunday));
}

function getDayJobs(dayOffset){
  const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+dayOffset);
  return DB.customers.filter(c=>isDueOnDate(c,d));
}

function isDueOnDate(c,date){
  if(c.sched==='inactive'||c.sched==='onetime')return false;

  // Respect start date — no jobs before first service date
  if(c.startDate){
    const start=new Date(c.startDate+'T12:00:00');
    start.setHours(0,0,0,0);
    if(date<start)return false;
  }

  // Paused: skip until resume date
  if(c.sched==='paused'){
    if(!c.resumeDate)return false;
    const resume=new Date(c.resumeDate+'T12:00:00');
    if(date<resume)return false;
  }

  const dow=parseInt(c.day||0);
  if(date.getDay()!==dow)return false;

  // Check skip weeks
  const dateStr=date.toISOString().slice(0,10);
  if(c.skipWeeks&&c.skipWeeks.includes(dateStr))return false;

  if(c.sched==='weekly'||c.sched==='paused')return true;

  if(c.sched==='biweekly'){
    // Use customer's start date as anchor if set, otherwise fall back to epoch
    let anchor;
    if(c.startDate){
      anchor=new Date(c.startDate+'T12:00:00');
      anchor.setHours(0,0,0,0);
    } else {
      anchor=new Date(2024,0,1);
    }
    const diffMs=date.getTime()-anchor.getTime();
    const diffWeeks=Math.floor(diffMs/(7*86400000));
    // Week A = even weeks from anchor, Week B = odd weeks from anchor
    const weekOffset=c.biweeklyWeek==='B'?1:0;
    return (diffWeeks+weekOffset)%2===0;
  }
  return false;
}

function isDueInRange(c,start,end){
  if(c.sched==='inactive')return false;
  let d=new Date(start);
  while(d<=end){if(isDueOnDate(c,d))return true;d.setDate(d.getDate()+1);}
  return false;
}

function renderWeekStrip(){
  const today=new Date();today.setHours(0,0,0,0);
  const startOfWeek=new Date(today);
  startOfWeek.setDate(today.getDate()-today.getDay());
  let html='';
  for(let i=0;i<7;i++){
    const d=new Date(startOfWeek);
    d.setDate(startOfWeek.getDate()+i);
    const isToday=d.getTime()===today.getTime();
    const off=Math.round((d-today)/86400000);
    const jobs=getDayJobs(off);
    const sel=off===selectedDayOffset;
    html+=`<div class="week-day ${isToday?'today':''} ${jobs.length>0?'has-jobs':''} ${sel?'selected':''}" onclick="selectDay(${off})">
      <div class="wd-name">${DAYS[d.getDay()]}</div>
      <div class="wd-num">${d.getDate()}</div>
      <div class="wd-dot">${jobs.length>0?'●':''}</div>
    </div>`;
  }
  document.getElementById('week-strip').innerHTML=html;
}

function selectDay(off){
  selectedDayOffset=off;
  renderWeekStrip();
  renderDayJobs();
}

function renderDayJobs(){
  const d=new Date();d.setHours(0,0,0,0);d.setDate(d.getDate()+selectedDayOffset);
  const jobs=getDayJobs(selectedDayOffset);
  const lbl=selectedDayOffset===0?'Today':selectedDayOffset===1?'Tomorrow':DAYS_FULL[d.getDay()]+', '+fmtDate(d);
  if(!jobs.length){
    document.getElementById('day-jobs-list').innerHTML=`<div style="font-size:13px;color:var(--ink3);text-align:center;padding:.75rem 0">No jobs scheduled for ${lbl}</div>`;
    return;
  }
  let h=`<div style="font-size:12px;font-weight:600;color:var(--ink3);margin-bottom:.5rem;text-transform:uppercase;letter-spacing:.04em">${lbl} — ${jobs.length} jobs</div>`;
  jobs.forEach((c,i)=>{
    const done=DB.jobHistory.find(j=>j.custId===c.id&&j.date===d.toISOString().slice(0,10));
    h+=`<div style="display:flex;align-items:center;gap:10px;padding:.5rem 0;border-bottom:1px solid var(--s3)">
      <div style="width:28px;height:28px;border-radius:50%;background:${done?'var(--gl)':'var(--green)'};color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:14px;flex-shrink:0">${done?'<i class="ti ti-check" style="font-size:13px"></i>':(i+1)}</div>
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;font-size:13px">${custFullName(c)}</div>
        <div style="font-size:11px;color:var(--ink3)">${custAddr(c)} · ${fmtMins(c.mowTime)}</div>
      </div>
      <div style="text-align:right;flex-shrink:0">
        <div style="font-weight:600;font-size:13px;color:var(--green)">$${parseFloat(c.price||0).toFixed(0)}</div>
        ${done?`<div style="font-size:10px;color:var(--gl)">${done.paid?'Paid':'Unpaid'}</div>`:''}
      </div>
    </div>`;
  });
  document.getElementById('day-jobs-list').innerHTML=h;
}

function renderUnpaid(){
  const unpaid=DB.jobHistory.filter(j=>!j.paid).slice(0,5);
  document.getElementById('unpaid-card').style.display=unpaid.length?'':'none';
  if(!unpaid.length)return;
  document.getElementById('unpaid-list').innerHTML=unpaid.map(j=>{
    const c=DB.customers.find(x=>x.id===j.custId);
    const price=parseFloat(c&&c.price||0);
    const hasStripeId=c&&c.stripeCustomerId&&c.stripeCustomerId.startsWith('cus_');
    const link=c?(c.payLink||getBestPayLink(price)):'';
    return `<div style="padding:.75rem 0;border-bottom:1px solid var(--s3)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.625rem">
        <div>
          <div style="font-weight:600;font-size:13px">${c?custFullName(c):j.custId}</div>
          <div style="font-size:11px;color:var(--ink3)">${fmtDate(j.date)}</div>
        </div>
        <span style="font-weight:700;font-size:15px;color:var(--red)">$${price.toFixed(2)}</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px">
        <button class="btn bxsm" style="background:var(--gp);color:var(--green);border-color:#b8d5b4;font-size:11px" onclick="markPaidDash('${j.id}','cash')">
          <i class="ti ti-cash" style="font-size:11px"></i> Cash
        </button>
        <button class="btn bxsm" style="background:var(--bp);color:var(--blue);border-color:#b3c8f0;font-size:11px" onclick="${hasStripeId?`chargeDash('${j.id}','${c.stripeCustomerId}',${price})`:`openPayLinkDash('${link}')`}">
          <i class="ti ti-credit-card" style="font-size:11px"></i> Card
        </button>
        <button class="btn bxsm" style="background:var(--ambp);color:var(--amb);border-color:#f0d9a0;font-size:11px" onclick="invoiceDash('${j.id}','${j.custId}',${price})">
          <i class="ti ti-send" style="font-size:11px"></i> Invoice
        </button>
      </div>
    </div>`;
  }).join('');
}

function markPaidDash(jobId,method){
  const j=DB.jobHistory.find(x=>x.id===jobId);
  if(j){
    j.paid=true;
    j.paidMethod=method;
    saveDB();
    // Sync to HubSpot if cash
    if(method==='cash'){
      const c=DB.customers.find(x=>x.id===j.custId);
      if(c)syncPaymentToHubSpot(j.custId,c.price||0,'Cash/Check',j.date);
    }
    renderDash();
  }
}

async function chargeDash(jobId,stripeCustomerId,price){
  const j=DB.jobHistory.find(x=>x.id===jobId);
  const c=DB.customers.find(x=>x.id===j.custId);
  if(!confirm(`Charge $${price.toFixed(2)} to ${c?custFullName(c):'customer'}'s card on file?`))return;
  try{
    const res=await fetch('https://effervescent-pie-af6453.netlify.app/.netlify/functions/charge',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({stripeCustomerId,amount:price,description:`Lawn service — ${c?custFullName(c):''} — ${j.date}`,customerName:c?custFullName(c):''})
    });
    const data=await res.json();
    if(data.success){
      markPaidDash(jobId,'card');
      alert(`✓ $${price.toFixed(2)} charged successfully!`);
    } else {
      alert('Charge failed: '+(data.error||'Unknown error'));
    }
  }catch(e){
    alert('Connection error. Try again.');
  }
}

function openPayLinkDash(link){
  if(!link){alert('No payment link set up. Go to Reports → Payment settings.');return;}
  window.open(link,'_blank');
}

function invoiceDash(jobId,custId,price){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c){alert('Customer not found.');return;}
  const link=c.payLink||getBestPayLink(price);
  if(!link){alert('No payment link set up. Go to Reports → Payment settings.');return;}
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';
  const msg=`Hi ${c.first}! You have an outstanding balance of $${price.toFixed(2)} for lawn service on ${fmtDate(DB.jobHistory.find(x=>x.id===jobId)?.date||'')}. Pay securely here: ${link} — Thanks, ${bizName}`;
  if(c.phone){window.open('sms:'+c.phone.replace(/\D/g,'')+'?body='+encodeURIComponent(msg));}
  else if(c.email){window.open('mailto:'+c.email+'?subject=Invoice — '+bizName+'&body='+encodeURIComponent(msg));}
  else{alert('No phone or email for this customer.');}
}

function markPaid(id){
  const j=DB.jobHistory.find(x=>x.id===id);
  if(j){j.paid=true;j.paidMethod='cash';saveDB();renderDash();}
}

function getMonthRevenue(){
  const now=new Date();
  const m=now.getMonth(),y=now.getFullYear();
  return DB.jobHistory.filter(j=>j.paid&&new Date(j.date).getMonth()===m&&new Date(j.date).getFullYear()===y).reduce((a,j)=>{const c=DB.customers.find(x=>x.id===j.custId);return a+parseFloat(c&&c.price||0);},0);
}

// ══ CALENDAR ═════════════════════════════════════════════════════
let calYear=new Date().getFullYear(), calMonth=new Date().getMonth(), calSelectedDate=null;

function calPrevMonth(){
  calMonth--;
  if(calMonth<0){calMonth=11;calYear--;}
  calSelectedDate=null;
  renderCalendar();
}
function calNextMonth(){
  calMonth++;
  if(calMonth>11){calMonth=0;calYear++;}
  calSelectedDate=null;
  renderCalendar();
}

function renderCalendar(){
  const now=new Date();
  const today=new Date(now.getFullYear(),now.getMonth(),now.getDate());
  const firstDay=new Date(calYear,calMonth,1);
  const lastDay=new Date(calYear,calMonth+1,0);
  const monthName=firstDay.toLocaleDateString('en-US',{month:'long',year:'numeric'});

  document.getElementById('cal-month-title').textContent=monthName;
  document.getElementById('cal-sub').textContent=monthName;

  // Day of week headers
  document.getElementById('cal-dow-row').innerHTML=
    ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=>
      `<div class="cal-dow">${d}</div>`).join('');

  // Build cells — pad start with empty cells
  let cells='';
  const startPad=firstDay.getDay(); // 0=Sun
  for(let p=0;p<startPad;p++) cells+=`<div class="cal-cell empty"></div>`;

  for(let d=1;d<=lastDay.getDate();d++){
    const date=new Date(calYear,calMonth,d);
    const dateStr=date.toISOString().slice(0,10);
    const isToday=date.getTime()===today.getTime();
    const isPast=date<today;
    const isSel=calSelectedDate===dateStr;

    // Get jobs for this day
    const dayOffset=Math.round((date-today)/86400000);
    const jobs=getDayJobsForDate(date);
    const histJobs=DB.jobHistory.filter(j=>j.date===dateStr);
    const paidCount=histJobs.filter(j=>j.paid).length;
    const unpaidCount=histJobs.filter(j=>!j.paid).length;

    // Dots: green for scheduled, filled for completed
    let dots='';
    if(jobs.length){
      jobs.forEach(j=>{
        const done=histJobs.find(h=>h.custId===j.id);
        const dotCls=done?(done.paid?'paid':'unpaid'):'';
        dots+=`<div class="cal-dot ${dotCls}"></div>`;
      });
    }

    const cls=[
      'cal-cell',
      isToday?'today':'',
      jobs.length?'has-jobs':'',
      isSel?'selected':'',
      isPast&&!isToday?'past':''
    ].filter(Boolean).join(' ');

    cells+=`<div class="${cls}" onclick="selectCalDay('${dateStr}')">
      <span class="cal-num">${d}</span>
      ${dots?`<div class="cal-dots">${dots}</div>`:''}
    </div>`;
  }

  // Pad end to complete last row
  const totalCells=startPad+lastDay.getDate();
  const endPad=(7-totalCells%7)%7;
  for(let p=0;p<endPad;p++) cells+=`<div class="cal-cell empty"></div>`;

  document.getElementById('cal-cells').innerHTML=cells;

  // Month summary
  renderCalMonthSummary();

  // If a date was selected, re-render its panel
  if(calSelectedDate) renderCalDayPanel(calSelectedDate);
  else{
    document.getElementById('cal-day-panel').innerHTML=
      `<div style="color:var(--ink3);font-size:13px;text-align:center;padding:1rem 0">Tap a day to see jobs</div>`;
  }
}

function getDayJobsForDate(date){
  return DB.customers.filter(c=>isDueOnDate(c,date));
}

function selectCalDay(dateStr){
  calSelectedDate=calSelectedDate===dateStr?null:dateStr;
  renderCalendar();
}

function renderCalDayPanel(dateStr){
  const date=new Date(dateStr+'T12:00:00');
  const dayLabel=date.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'});
  const jobs=getDayJobsForDate(date);
  const histJobs=DB.jobHistory.filter(j=>j.date===dateStr);
  const panel=document.getElementById('cal-day-panel');

  if(!jobs.length){
    panel.innerHTML=`<div class="cal-day-title">${dayLabel}</div>
      <div style="color:var(--ink3);font-size:13px;padding:.25rem 0">No jobs scheduled</div>`;
    return;
  }

  const totalMow=jobs.reduce((a,c)=>a+parseInt(c.mowTime||45),0);
  const totalRev=jobs.reduce((a,c)=>a+parseFloat(c.price||0),0);

  let h=`<div style="display:flex;align-items:flex-start;justify-content:space-between;margin-bottom:.75rem;flex-wrap:wrap;gap:6px">
    <div class="cal-day-title" style="margin:0">${dayLabel}</div>
    <div style="display:flex;gap:6px;flex-wrap:wrap">
      <span class="cal-rev-badge"><i class="ti ti-clock" style="font-size:10px"></i> ${fmtMins(totalMow)}</span>
      <span class="cal-rev-badge"><i class="ti ti-currency-dollar" style="font-size:10px"></i> $${totalRev.toFixed(0)}</span>
    </div>
  </div>`;

  jobs.forEach((c,i)=>{
    const hist=histJobs.find(h=>h.custId===c.id);
    const statusDot=hist
      ?(hist.paid
        ?`<span style="width:8px;height:8px;border-radius:50%;background:var(--green);display:inline-block;flex-shrink:0"></span>`
        :`<span style="width:8px;height:8px;border-radius:50%;background:var(--red);display:inline-block;flex-shrink:0"></span>`)
      :`<span style="width:8px;height:8px;border-radius:50%;background:var(--bd);border:1px solid var(--bd);display:inline-block;flex-shrink:0"></span>`;

    const payBadge=hist
      ?(hist.paid
        ?`<span class="tag tag-green" style="font-size:9px">Paid</span>`
        :`<span class="tag tag-red" style="font-size:9px">Unpaid</span>`)
      :'';

    h+=`<div class="cal-job-row">
      ${statusDot}
      <div style="flex:1;min-width:0">
        <div style="font-weight:600;font-size:13px">${custFullName(c)}</div>
        <div style="font-size:11px;color:var(--ink3);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${custAddr(c)}</div>
      </div>
      <div style="text-align:right;flex-shrink:0;display:flex;flex-direction:column;align-items:flex-end;gap:3px">
        <span style="font-size:12px;font-weight:600;color:var(--green)">$${parseFloat(c.price||0).toFixed(0)}</span>
        <span style="font-size:10px;color:var(--ink3)">${fmtMins(c.mowTime)}</span>
        ${payBadge}
      </div>
    </div>`;
  });

  panel.innerHTML=h;
}

function renderCalMonthSummary(){
  const summary=document.getElementById('cal-month-summary');
  const content=document.getElementById('cal-summary-content');
  // Count all jobs in this month
  const daysInMonth=new Date(calYear,calMonth+1,0).getDate();
  let totalJobs=0, totalRev=0, totalMow=0, workDays=new Set();
  for(let d=1;d<=daysInMonth;d++){
    const date=new Date(calYear,calMonth,d);
    const jobs=getDayJobsForDate(date);
    if(jobs.length){
      totalJobs+=jobs.length;
      totalRev+=jobs.reduce((a,c)=>a+parseFloat(c.price||0),0);
      totalMow+=jobs.reduce((a,c)=>a+parseInt(c.mowTime||45),0);
      workDays.add(d);
    }
  }
  if(!totalJobs){summary.style.display='none';return;}
  summary.style.display='';
  content.innerHTML=`
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px">
      <div class="sum-box"><div class="sum-v">${totalJobs}</div><div class="sum-l">Jobs</div></div>
      <div class="sum-box"><div class="sum-v">${workDays.size}</div><div class="sum-l">Work days</div></div>
      <div class="sum-box"><div class="sum-v" style="color:var(--green)">$${totalRev.toFixed(0)}</div><div class="sum-l">Revenue</div></div>
    </div>
    <div style="margin-top:.75rem;font-size:12px;color:var(--ink3);display:flex;gap:12px;flex-wrap:wrap">
      <span>🟢 Scheduled &nbsp;🟩 Paid &nbsp;🔴 Unpaid</span>
    </div>`;
}

// ══ WEATHER ══════════════════════════════════════════════════════
// Sapulpa, OK coordinates — free Open-Meteo API, no key needed
const WEATHER_LAT=36.0034, WEATHER_LON=-96.1128;
const WMO_ICON={0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'🌨️',73:'🌨️',75:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️',96:'⛈️',99:'⛈️'};
const WMO_DESC={0:'Clear sky',1:'Mostly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Foggy',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Light snow',73:'Snow',75:'Heavy snow',80:'Showers',81:'Heavy showers',82:'Violent showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm'};

async function fetchWeather(){
  const card=document.getElementById('weather-card');
  if(!card)return;
  try{
    const url=`https://api.open-meteo.com/v1/forecast?latitude=${WEATHER_LAT}&longitude=${WEATHER_LON}&current=temperature_2m,apparent_temperature,weathercode,windspeed_10m,relative_humidity_2m,precipitation_probability&temperature_unit=fahrenheit&windspeed_unit=mph&timezone=America/Chicago`;
    const res=await fetch(url);
    const data=await res.json();
    const c=data.current;
    const code=c.weathercode;
    const icon=WMO_ICON[code]||'🌡️';
    const desc=WMO_DESC[code]||'Unknown';
    const temp=Math.round(c.temperature_2m);
    const feels=Math.round(c.apparent_temperature);
    const wind=Math.round(c.windspeed_10m);
    const humid=c.relative_humidity_2m;
    const rain=c.precipitation_probability??0;
    // Rain chance drives a work advisory
    let advisory='';
    if(rain>=70)advisory=`<div style="margin-top:.75rem;background:rgba(0,0,0,.2);border-radius:8px;padding:.5rem .75rem;font-size:12px;font-weight:600">⚠️ ${rain}% chance of rain — consider rescheduling</div>`;
    else if(rain>=40)advisory=`<div style="margin-top:.75rem;background:rgba(0,0,0,.15);border-radius:8px;padding:.5rem .75rem;font-size:12px;font-weight:600">🌂 ${rain}% chance of rain today</div>`;
    card.innerHTML=`
      <div class="weather-top">
        <div>
          <div class="weather-temp">${temp}°</div>
          <div class="weather-desc">${desc}</div>
          <div class="weather-loc">Sapulpa, OK · Feels like ${feels}°</div>
        </div>
        <div class="weather-icon">${icon}</div>
      </div>
      <div class="weather-grid">
        <div class="weather-stat"><div class="wsl">Rain</div><div class="wsv">${rain}%</div></div>
        <div class="weather-stat"><div class="wsl">Wind</div><div class="wsv">${wind} mph</div></div>
        <div class="weather-stat"><div class="wsl">Humidity</div><div class="wsv">${humid}%</div></div>
      </div>
      ${advisory}`;
  }catch(e){
    card.innerHTML=`<div class="weather-loading">Weather unavailable</div>`;
  }
}

// ══ ROUTE PLANNER ════════════════════════════════════════════════
let planJobs=[], planDT={}, mapsLoaded=false, planMap, planDR, planApiKey='';

function buildTodayRoute(){
  goTab('plan');
  const custs=getDayJobs(0);
  if(!custs.length){alert('No customers scheduled for today. Check customer schedules.');return;}
  planJobs=custs.map(c=>({id:c.id,name:custFullName(c),addr:custAddr(c),time:parseInt(c.mowTime||45),size:c.size||'md',notes:c.gate||'',priority:false,serviceType:c.serviceType||'mow'}));
  planDT={};
  if(mapsLoaded)fetchPlanDT();else renderPlan();
}

function initMaps(){
  const key=document.getElementById('maps-key').value.trim();
  if(!key){document.getElementById('maps-status').innerHTML='<span style="color:var(--red)">Enter a key</span>';return;}
  planApiKey=key;
  // FIX: also persist the maps key when it's used to connect
  DB.settings.mapsKey=key;
  saveDB();
  document.getElementById('maps-status').innerHTML='<span class="spin"></span> Connecting...';
  const s=document.createElement('script');
  s.src='https://maps.googleapis.com/maps/api/js?key='+key+'&libraries=places&callback=onMapsReady';
  s.onerror=()=>{document.getElementById('maps-status').innerHTML='<span style="color:var(--red)">Failed — check key</span>';};
  window.onMapsReady=()=>{
    mapsLoaded=true;
    document.getElementById('maps-status').innerHTML='<span style="color:var(--green)">✓ Connected</span>';
    document.getElementById('maps-setup').style.display='none';
    setTimeout(()=>{
      planMap=new google.maps.Map(document.getElementById('plan-map'),{zoom:11,center:{lat:36.0,lng:-96.0},mapTypeControl:false,streetViewControl:false});
      planDR=new google.maps.DirectionsRenderer({polylineOptions:{strokeColor:'#2d5a27',strokeWeight:5}});
      planDR.setMap(planMap);
      document.getElementById('plan-map-wrap').style.display='';
    },200);
    if(planJobs.length)fetchPlanDT();
  };
  document.head.appendChild(s);
}

async function fetchPlanDT(){
  if(!mapsLoaded||!planJobs.length){renderPlan();return;}
  document.getElementById('plan-loading').style.display='';
  const home=document.getElementById('plan-home').value.trim();
  const all=home?[home,...planJobs.map(j=>j.addr)]:planJobs.map(j=>j.addr);
  try{
    const res=await new Promise((ok,err)=>{new google.maps.DistanceMatrixService().getDistanceMatrix({origins:all,destinations:all,travelMode:google.maps.TravelMode.DRIVING,unitSystem:google.maps.UnitSystem.IMPERIAL},(r,s)=>s==='OK'?ok(r):err(s));});
    planDT={};
    all.forEach((_,i)=>{all.forEach((_,j)=>{if(i!==j){const el=res.rows[i].elements[j];planDT[i+'-'+j]=el.status==='OK'?Math.round(el.duration.value/60):null;}});});
    document.getElementById('plan-loading').style.display='none';
    renderPlan();updatePlanMap();
  }catch(e){document.getElementById('plan-loading').innerHTML='<span style="color:var(--red)">Drive time failed: '+e+'</span>';renderPlan();}
}

function renderPlan(){
  const crew=1;
  const home=document.getElementById('plan-home').value.trim();
  const hours=parseFloat(document.getElementById('plan-hours').value)||8;
  const st=document.getElementById('plan-start').value||'07:00';
  const parts=st.split(':');let cur=parseInt(parts[0])*60+parseInt(parts[1]);
  const am=hours*60;const off=home?1:0;
  let tm=0,td=0,sch=[],ov=[],bud=am,prev=0;
  planJobs.forEach((j,i)=>{
    const ci=i+off,dm=planDT[prev+'-'+ci]??null,mm=Math.round(j.time/crew),tot=(dm||0)+mm;
    if(j.priority||bud>=tot){tm+=mm;td+=(dm||0);bud-=tot;sch.push({...j,dm,mm,arr:cur+(dm||0),done:cur+(dm||0)+mm});cur+=tot;prev=ci;}
    else ov.push({...j,dm,mm});
  });
  const tt=tm+td,pct=am>0?Math.round(tt/am*100):0;
  document.getElementById('plan-route-card').style.display=planJobs.length?'':'none';
  document.getElementById('plan-jobs-card').style.display=planJobs.length?'':'none';
  document.getElementById('plan-metrics-wrap').style.display=planJobs.length?'':'none';
  if(planJobs.length){
    const cls=pct>100?'color:var(--red)':pct>85?'color:var(--amb)':'color:var(--green)';
    // Compute total distance from DT matrix (minutes -> rough miles at 25mph avg)
    let totalDriveMi=0;
    if(Object.keys(planDT).length){
      // Sum drive segments: prev->ci for each scheduled job
      let p2=0;
      planJobs.forEach((_,i2)=>{const ci2=i2+off;const dm2=planDT[p2+'-'+ci2];if(dm2)totalDriveMi+=dm2/60*25;p2=ci2;});
    }
    const miStr=totalDriveMi>0?totalDriveMi.toFixed(1)+' mi':'—';
    document.getElementById('plan-metrics').innerHTML=
      `<div class="dash-card" style="padding:.75rem"><div class="dash-val" style="font-size:26px;color:var(--green)">${Math.round(tm)}m</div><div class="dash-lbl">Mow</div></div>`+
      `<div class="dash-card" style="padding:.75rem"><div class="dash-val" style="font-size:26px">${Math.round(td)}m</div><div class="dash-lbl">Drive</div></div>`+
      `<div class="dash-card" style="padding:.75rem"><div class="dash-val" style="font-size:26px;${cls}">${Math.round(tt)}m</div><div class="dash-lbl">Total</div></div>`+
      `<div class="dash-card" style="padding:.75rem"><div class="dash-val" style="font-size:26px;color:var(--blue)">${miStr}</div><div class="dash-lbl">Miles</div></div>`;
  }
  const tagCls={sm:'tag-green',md:'tag-blue',lg:'tag-amb'},tagLbl={sm:'Sm',md:'Med',lg:'Lg'};
  let h='';
  sch.forEach((j,i)=>{
    if(i>0){const dl=j.dm!==null?j.dm+'m drive':'...';h+=`<div style="height:14px;width:1px;background:var(--bd);margin-left:15px"></div><div class="drive-row"><i class="ti ti-car" style="font-size:12px"></i> ${dl}</div><div style="height:14px;width:1px;background:var(--bd);margin-left:15px"></div>`;}
    h+=`<div class="sched-row">
      <div class="sched-num">${i+1}</div>
      <div class="sched-info">
        <div class="sched-name">${j.name} <span class="tag ${tagCls[j.size]}">${tagLbl[j.size]}</span></div>
        <div class="sched-detail">${j.addr}${j.notes?' · <em>'+j.notes+'</em>':''}</div>
        <div style="font-size:11px;color:var(--ink3);margin-top:2px">Arrive ${fmtClock(j.arr)} · Done ${fmtClock(j.done)}</div>
      </div>
      <div class="sched-right"><div class="sched-time">${j.mm}</div><div class="sched-timelbl">min</div></div>
    </div>`;
  });
  document.getElementById('plan-route-list').innerHTML=h||'<div style="color:var(--ink3);font-size:13px;padding:.5rem 0">No jobs yet.</div>';
  document.getElementById('plan-jobs-list').innerHTML=planJobs.map((j,i)=>
    `<div style="display:flex;align-items:center;gap:10px;padding:.5rem 0;border-bottom:1px solid var(--s3)">
      <div style="font-family:'Bebas Neue',sans-serif;font-size:16px;color:var(--ink3);width:24px;text-align:center">${i+1}</div>
      <div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:600">${j.name}</div><div style="font-size:11px;color:var(--ink3)">${j.addr}</div></div>
      <button class="btn bxsm btnr" onclick="removePlanJob(${i})"><i class="ti ti-trash"></i></button>
    </div>`).join('');
}

function removePlanJob(i){planJobs.splice(i,1);planDT={};if(mapsLoaded&&planJobs.length)fetchPlanDT();else renderPlan();}
function clearPlan(){if(confirm('Clear all stops?')){planJobs=[];planDT={};renderPlan();}}

function optimizePlan(){
  if(!mapsLoaded||planJobs.length<2)return;
  const home=document.getElementById('plan-home').value.trim();
  const off=home?1:0;
  const pri=planJobs.filter(j=>j.priority),rest=planJobs.filter(j=>!j.priority);
  if(rest.length<2){renderPlan();return;}
  let vis=new Set(pri.map(j=>planJobs.indexOf(j)+off)),ord=[...pri];
  let cur=home?0:(pri.length>0?planJobs.indexOf(pri[pri.length-1])+off:0);
  const ri=rest.map(j=>planJobs.indexOf(j)+off);
  while(ord.length-pri.length<rest.length){
    let best=null,bt=Infinity;
    ri.forEach(idx=>{if(!vis.has(idx)){const t=planDT[cur+'-'+idx];if(t!==null&&t<bt){bt=t;best=idx;}}});
    if(best===null)break;vis.add(best);ord.push(planJobs[best-off]);cur=best;
  }
  rest.forEach(j=>{if(!ord.includes(j))ord.push(j);});
  planJobs=[...pri,...ord.filter(j=>!pri.includes(j))];
  planDT={};fetchPlanDT();
}

function updatePlanMap(){
  if(!mapsLoaded||planJobs.length<2)return;
  const home=document.getElementById('plan-home').value.trim();
  const wp=planJobs.slice(1,planJobs.length-1).map(j=>({location:j.addr,stopover:true}));
  new google.maps.DirectionsService().route({origin:home||planJobs[0].addr,destination:planJobs[planJobs.length-1].addr,waypoints:wp,optimizeWaypoints:false,travelMode:google.maps.TravelMode.DRIVING},(r,s)=>{if(s==='OK')planDR.setDirections(r);});
}

function openMapsDir(){
  const home=document.getElementById('plan-home').value.trim();
  const addrs=(home?[home]:[]).concat(planJobs.map(j=>j.addr));
  if(addrs.length<2){alert('Need at least 2 stops.');return;}
  window.open('https://www.google.com/maps/dir/'+addrs.map(a=>encodeURIComponent(a)).join('/'),'_blank');
}

function sendToTracker(){
  const home=document.getElementById('plan-home').value.trim();
  const st=document.getElementById('plan-start').value||'07:00';
  const parts=st.split(':');let cur=parseInt(parts[0])*60+parseInt(parts[1]);
  const off=home?1:0;let prev=0;
  const sch=[];
  let totalMiles=0;
  planJobs.forEach((j,i)=>{
    const ci=i+off,dm=planDT[prev+'-'+ci]??null,mm=Math.round(j.time);
    const segMiles=dm?parseFloat((dm/60*25).toFixed(1)):0;
    totalMiles+=segMiles;
    sch.push({id:j.id,name:j.name,addr:j.addr,size:j.size,notes:j.notes,estMin:mm,arr:cur+(dm||0),done:cur+(dm||0)+mm,dm,miles:segMiles,serviceType:j.serviceType||'mow'});
    cur+=(dm||0)+mm;prev=ci;
  });
  const payload={date:new Date().toISOString(),jobs:sch,totalMiles:parseFloat(totalMiles.toFixed(1))};
  localStorage.setItem('ros_track_route',JSON.stringify(payload));
  // Log mileage for reports
  if(payload.totalMiles>0){
    try{
      const raw=localStorage.getItem('ros_mileage_log');
      const log=raw?JSON.parse(raw):[];
      const today=todayStr();
      const existing=log.findIndex(e=>e.date===today);
      const entry={date:today,miles:payload.totalMiles,stops:payload.jobs.length};
      if(existing>=0)log[existing]=entry;else log.push(entry);
      // Keep last 90 days
      log.sort((a,b)=>a.date.localeCompare(b.date));
      if(log.length>90)log.splice(0,log.length-90);
      localStorage.setItem('ros_mileage_log',JSON.stringify(log));
    }catch(e){}
  }
  trackerRoute=payload;
  // FIX: clear tracker states when a new route is loaded from planner
  trackerStates={};
  saveTrackerStates();
  goTab('track');
  loadTrackerRoute(payload);
}

function printRoute(){window.print();}

// ══ FIELD TRACKER ════════════════════════════════════════════════
let trackerRoute=null, trackerStates={}, pvJob=null, pvType=null, pvIdx=0;

// FIX: Persist tracker states (including photos) to localStorage so data survives reloads
function saveTrackerStates(){
  try{
    // Timers need special handling: save elapsed + whether active (but not the interval id)
    const toSave={};
    Object.keys(trackerStates).forEach(i=>{
      const s=trackerStates[i];
      toSave[i]={
        status: s.status,
        elapsed: s.elapsed+(s.startMs?Math.floor((Date.now()-s.startMs)/1000):0),
        wasActive: s.status==='active',
        startMs: s.status==='active'?Date.now():null,
        beforePhotos: s.beforePhotos,
        afterPhotos: s.afterPhotos,
        extraPhotos: s.extraPhotos,
        beforePhotoUrls: s.beforePhotoUrls||[],
        afterPhotoUrls: s.afterPhotoUrls||[],
        extraPhotoUrls: s.extraPhotoUrls||[],
        notes: s.notes,
        actualMin: s.actualMin,
        expanded: s.expanded
      };
    });
    localStorage.setItem('ros_tracker_states',JSON.stringify(toSave));
  }catch(e){
    console.log('saveTrackerStates error',e);
  }
}

function loadTrackerStates(){
  try{
    const raw=localStorage.getItem('ros_tracker_states');
    if(!raw)return;
    const saved=JSON.parse(raw);
    trackerStates={};
    Object.keys(saved).forEach(i=>{
      const s=saved[i];
      trackerStates[i]={
        status: s.status,
        elapsed: s.elapsed||0,
        startMs: s.wasActive?Date.now():null,
        interval: null,
        beforePhotos: s.beforePhotos||[],
        afterPhotos: s.afterPhotos||[],
        extraPhotos: s.extraPhotos||[],
        beforePhotoUrls: s.beforePhotoUrls||[],
        afterPhotoUrls: s.afterPhotoUrls||[],
        extraPhotoUrls: s.extraPhotoUrls||[],
        notes: s.notes||'',
        actualMin: s.actualMin||0,
        expanded: s.expanded||false
      };
    });
  }catch(e){
    console.log('loadTrackerStates error',e);
    trackerStates={};
  }
}

function getTS(i){
  if(!trackerStates[i])trackerStates[i]={status:'pending',startMs:null,elapsed:0,interval:null,beforePhotos:[],afterPhotos:[],extraPhotos:[],beforePhotoUrls:[],afterPhotoUrls:[],extraPhotoUrls:[],notes:'',actualMin:0,expanded:false};
  return trackerStates[i];
}
function getElap(i){const s=getTS(i);return s.elapsed+(s.startMs?Math.floor((Date.now()-s.startMs)/1000):0);}
function hasBefore(i){return getTS(i).beforePhotos.length>0;}
function hasAfter(i){return getTS(i).afterPhotos.length>0;}

function tryAutoLoadTracker(){
  try{
    const d=localStorage.getItem('ros_track_route');
    if(d){
      const p=JSON.parse(d);
      if(p&&p.jobs&&p.jobs.length){
        // FIX: load saved tracker states before rendering
        loadTrackerStates();
        loadTrackerRoute(p);
        return;
      }
    }
  }catch(e){}
}

function loadTrackerRoute(data){
  trackerRoute=data;
  document.getElementById('track-empty').style.display='none';
  document.getElementById('track-export-wrap').style.display='';
  const miles=data.totalMiles?` · ${data.totalMiles} mi`:'';
  document.getElementById('track-sub').textContent=data.jobs.length+' stops · '+new Date(data.date).toLocaleDateString()+miles;
  renderTracker();
}

function renderTracker(){
  if(!trackerRoute)return;
  document.getElementById('track-jobs').innerHTML=trackerRoute.jobs.map((j,i)=>buildJobCard(j,i)).join('');
  trackerRoute.jobs.forEach((_,i)=>{if(getTS(i).status==='active')startTick(i);});
}

function buildJobCard(j,i){
  const s=getTS(i);
  const el=getElap(i);
  const slbl={pending:'Pending',active:'In Progress',done:'Complete'};
  const scls={pending:'js-p',active:'js-a',done:'js-d'};
  const ccls=s.status==='active'?'active':s.status==='done'?'done':(s.expanded?'exp':'');
  const tcls=s.status==='active'?'':s.status==='done'?'fin':'paused';

  const beforeSrcs=s.beforePhotos.map((p,pi)=>s.beforePhotoUrls&&s.beforePhotoUrls[pi]?s.beforePhotoUrls[pi]:p);
  const afterSrcs=s.afterPhotos.map((p,pi)=>s.afterPhotoUrls&&s.afterPhotoUrls[pi]?s.afterPhotoUrls[pi]:p);
  const extraSrcs=s.extraPhotos.map((p,pi)=>s.extraPhotoUrls&&s.extraPhotoUrls[pi]?s.extraPhotoUrls[pi]:p);
  const beforeGrid=beforeSrcs.map((p,pi)=>`<img class="pthumb" src="${p}" onclick="openPV(${i},'before',${pi})" onerror="this.style.opacity='.3'">`).join('');
  const afterGrid=afterSrcs.map((p,pi)=>`<img class="pthumb" src="${p}" onclick="openPV(${i},'after',${pi})" onerror="this.style.opacity='.3'">`).join('');
  const extraGrid=extraSrcs.map((p,pi)=>`<img class="pthumb" src="${p}" onclick="openPV(${i},'extra',${pi})" onerror="this.style.opacity='.3'">`).join('');

  return `<div class="job-card ${ccls}" id="jcard-${i}">
  <div class="job-hdr" onclick="toggleJCard(${i})">
    <div class="job-num2" id="jnum-${i}">${s.status==='done'?'<i class="ti ti-check" style="font-size:15px"></i>':(i+1)}</div>
    <div class="job-meta2"><div class="job-name2">${j.name||'Job #'+(i+1)}</div><div class="job-addr2">${j.addr}</div></div>
    <div class="jstat ${scls[s.status]}">${slbl[s.status]}</div>
  </div>
  <div class="job-body2">
    <div class="est-info">
      <span><i class="ti ti-clock" style="font-size:11px"></i> Est. ${fmtMins(j.estMin)}</span>
      <span><i class="ti ti-flag" style="font-size:11px"></i> Arrive ${fmtClock(j.arr)}</span>
      ${j.notes?`<span><i class="ti ti-note" style="font-size:11px"></i> ${j.notes}</span>`:''}
      ${j.serviceType&&j.serviceType!=='mow'?`<span><i class="ti ti-list-check" style="font-size:11px"></i> ${{mow:'Mow only',mow_edge:'Mow + Edge',full:'Mow + Edge + Blow',cleanup:'Full cleanup'}[j.serviceType]||j.serviceType}</span>`:''}
    </div>

    <!-- Before photos -->
    <div class="photo-section">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3)">Before photos</div>
        <span class="photo-req-badge ${hasBefore(i)?'prb-done':'prb-need'}">${hasBefore(i)?'✓ Done':'Required'}</span>
      </div>
      ${s.beforePhotos.length>0?`<div class="photo-grid">${beforeGrid}</div>`:''}
      <button class="photo-add-btn" onclick="document.getElementById('bcam-${i}').click()"><i class="ti ti-camera"></i> Take before photo</button>
      <input type="file" id="bcam-${i}" accept="image/*" capture="environment" style="display:none" onchange="addPhoto(${i},'before',this)">
    </div>

    <!-- Timer + start -->
    <div style="display:flex;align-items:center;justify-content:space-between;padding:.75rem 0;border-top:1px solid var(--s3);border-bottom:1px solid var(--s3);margin-bottom:.875rem">
      <div class="timer-big ${tcls}" id="jtimer-${i}">${fmtTimer(el)}</div>
      <div>
        ${s.status==='active'?`<button class="btn btna" style="height:38px;width:100px;font-size:12px" onclick="pauseJob(${i})"><i class="ti ti-player-pause"></i> Pause</button>`:''}
        ${s.status==='done'?`<span style="font-family:'Bebas Neue',sans-serif;font-size:13px;color:var(--green);letter-spacing:.04em">DONE ✓</span>`:''}
      </div>
    </div>

    ${s.status==='pending'?`
      ${!hasBefore(i)?`<div class="req-warn"><i class="ti ti-camera"></i><div><strong>Take a before photo</strong> to start the job.</div></div>`:''}
      <button class="btn btng" style="width:100%;margin-bottom:.875rem" onclick="startJob(${i})" ${!hasBefore(i)?'disabled style="width:100%;margin-bottom:.875rem;opacity:.45;cursor:not-allowed"':''}>
        <i class="ti ti-player-play"></i> Start Job
      </button>`:''}

    ${s.status==='active'||s.status==='done'?`
    <div class="photo-section">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem">
        <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3)">After photos</div>
        <span class="photo-req-badge ${hasAfter(i)?'prb-done':'prb-need'}">${hasAfter(i)?'✓ Done':'Required'}</span>
      </div>
      ${s.afterPhotos.length>0?`<div class="photo-grid">${afterGrid}</div>`:''}
      <button class="photo-add-btn" onclick="document.getElementById('acam-${i}').click()"><i class="ti ti-camera-check"></i> Take after photo</button>
      <input type="file" id="acam-${i}" accept="image/*" capture="environment" style="display:none" onchange="addPhoto(${i},'after',this)">
    </div>`:''}

    ${s.status==='active'?`
      ${!hasAfter(i)?`<div class="req-warn"><i class="ti ti-camera-check"></i><div><strong>Take an after photo</strong> to complete the job.</div></div>`:''}
      <button class="btn btng" style="width:100%;margin-bottom:.875rem" onclick="finishJob(${i})" ${!hasAfter(i)?'disabled style="width:100%;margin-bottom:.875rem;opacity:.45;cursor:not-allowed"':''}>
        <i class="ti ti-flag-check"></i> Mark Complete
      </button>`:''}

    ${s.status==='done'?`
      <div class="sum-grid">
        <div class="sum-box"><div class="sum-v">${fmtMins(s.actualMin)}</div><div class="sum-l">Actual</div></div>
        <div class="sum-box"><div class="sum-v">${fmtMins(j.estMin)}</div><div class="sum-l">Estimated</div></div>
      </div>
      ${buildPaymentUI(j,i,s)}`:''}

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:.875rem">
      <button class="btn" style="font-size:12px" onclick="document.getElementById('ecam-${i}').click()"><i class="ti ti-camera-plus"></i> Extra photo</button>
      <button class="btn" style="font-size:12px" onclick="navTo('${j.addr.replace(/'/g,"\\'")}')"><i class="ti ti-navigation"></i> Navigate</button>
      <button class="btn" style="font-size:12px;grid-column:span 2" onclick="sendOnMyWayFromTracker('${j.id}')"><i class="ti ti-send"></i> Text "On my way"</button>
      <input type="file" id="ecam-${i}" accept="image/*" capture="environment" style="display:none" onchange="addPhoto(${i},'extra',this)">
    </div>

    ${s.extraPhotos.length>0?`<div class="photo-section"><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);margin-bottom:.5rem">Extra photos (${s.extraPhotos.length})</div><div class="photo-grid">${extraGrid}</div></div>`:''}

    <div><div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);margin-bottom:.4rem">Field notes</div>
    <textarea class="notes-area" id="jnotes-${i}" placeholder="Gate confirmed, issues found..." oninput="getTS(${i}).notes=this.value;saveTrackerStates()">${s.notes}</textarea></div>
  </div>
</div>`;
}

function getJobRecord(custId){return DB.jobHistory.find(j=>j.custId===custId&&j.date===todayStr());}

// ══ PAYMENT UI ════════════════════════════════════════════════════
function getStripeSettings(){
  try{return JSON.parse(localStorage.getItem('ros_stripe')||'{}');}catch(e){return {};}
}

function saveStripeSettings(){
  const defaultLink=document.getElementById('st-default-link').value.trim();
  const bizName=document.getElementById('st-biz-name').value.trim();
  // Collect price links
  const priceLinks=[];
  document.querySelectorAll('.stripe-price-row').forEach(row=>{
    const price=row.querySelector('.spl-price').value.trim();
    const link=row.querySelector('.spl-link').value.trim();
    if(price&&link)priceLinks.push({price,link});
  });
  const settings={defaultLink,bizName,priceLinks};
  localStorage.setItem('ros_stripe',JSON.stringify(settings));
  DB.settings.stripeDefaultLink=defaultLink;
  DB.settings.stripeBizName=bizName;
  saveDB();
  const msg=document.getElementById('stripe-save-msg');
  msg.textContent='✓ Saved';msg.style.display='';
  setTimeout(()=>msg.style.display='none',2000);
}

function addStripePriceLink(price='',link=''){
  const container=document.getElementById('stripe-price-links');
  const row=document.createElement('div');
  row.className='stripe-price-row fr';
  row.style.marginBottom='.5rem';
  row.innerHTML=`<div class="f" style="flex:0 0 90px"><label>Price ($)</label><input class="spl-price" type="number" placeholder="65" value="${price}" min="0" step="0.01"></div><div class="f"><label>Stripe link</label><input class="spl-link" type="url" placeholder="https://buy.stripe.com/..." value="${link}"></div><button class="btn bxsm btnr" style="margin-top:auto" onclick="this.closest('.stripe-price-row').remove()"><i class="ti ti-x"></i></button>`;
  container.appendChild(row);
}

function loadStripeSettingsUI(){
  const s=getStripeSettings();
  const dl=document.getElementById('st-default-link');
  const bn=document.getElementById('st-biz-name');
  if(dl)dl.value=s.defaultLink||'';
  if(bn)bn.value=s.bizName||'Richardson Outdoor Solutions';
  const container=document.getElementById('stripe-price-links');
  if(container){
    container.innerHTML='';
    (s.priceLinks||[]).forEach(pl=>addStripePriceLink(pl.price,pl.link));
  }
}

function getBestPayLink(price){
  const s=getStripeSettings();
  // Try to find a price-specific link first
  if(s.priceLinks&&price){
    const match=s.priceLinks.find(pl=>parseFloat(pl.price)===parseFloat(price));
    if(match&&match.link)return match.link;
  }
  return s.defaultLink||'';
}

function buildPaymentUI(j,i,s){
  const rec=getJobRecord(j.id);
  const c=DB.customers.find(x=>x.id===j.id);
  const price=parseFloat(c&&c.price||0);
  const payMethod=c&&c.payMethod||'cash';
  const stripeSettings=getStripeSettings();
  const hasStripe=!!(stripeSettings.defaultLink||(stripeSettings.priceLinks&&stripeSettings.priceLinks.length));

  // Already paid
  if(rec&&rec.paid){
    return `<div class="pay-done-badge">
      <i class="ti ti-circle-check-filled" style="font-size:24px;color:var(--green);flex-shrink:0"></i>
      <div><div style="font-weight:700;font-size:14px;color:var(--green)">Payment recorded</div>
      <div style="font-size:12px;color:var(--ink3)">${rec.paidMethod==='cash'?'Cash / Check':rec.paidMethod==='card'?'Charged via Stripe':rec.paidMethod==='invoice'?'Invoice sent':'Paid'} · $${parseFloat(rec.chargedAmount||price).toFixed(2)}</div></div>
    </div>
    <button class="btn bsm" onclick="textCustomer('${j.id}')" style="margin-bottom:.875rem;width:100%"><i class="ti ti-message"></i> Text job summary</button>`;
  }

  const stripeNote=hasStripe?'':`<div style="font-size:11px;color:var(--amb);margin-top:4px">⚠ Set up Stripe links in Reports → Payment settings</div>`;

  return `<div style="margin-bottom:.875rem">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.625rem;flex-wrap:wrap;gap:8px">
      <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3)">Collect payment</div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:12px;color:var(--ink3)">Amount:</span>
        <div style="position:relative;display:inline-flex;align-items:center">
          <span style="position:absolute;left:8px;font-size:14px;font-weight:700;color:var(--green)">$</span>
          <input type="number" id="pay-amount-${i}" value="${price.toFixed(2)}" min="0" step="0.01"
            style="width:90px;height:34px;border-radius:var(--r);border:2px solid var(--green);background:var(--s);color:var(--ink);padding:0 8px 0 20px;font-size:15px;font-weight:700;font-family:'DM Sans',sans-serif;text-align:right"
            oninput="updatePayAmount(${i})">
        </div>
        <button class="btn bxsm" onclick="resetPayAmount(${i},${price})" style="font-size:10px;color:var(--ink3)">Reset</button>
      </div>
    </div>
    <div id="pay-extra-note-${i}" style="display:none;background:var(--ambp);border-radius:8px;padding:.5rem .75rem;font-size:12px;color:var(--amb);margin-bottom:.625rem">
      <i class="ti ti-edit" style="font-size:11px"></i> Custom amount — base price is $${price.toFixed(2)}
    </div>

    <div class="pay-box pay-cash" onclick="payByCash('${j.id}','${i}',getPayAmount(${i}))">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="font-size:26px">💵</div>
        <div>
          <div class="pay-box-title">Cash / Check</div>
          <div class="pay-box-sub">Mark as received on the spot</div>
        </div>
        <i class="ti ti-chevron-right" style="margin-left:auto;color:var(--ink3)"></i>
      </div>
    </div>

    <div class="pay-box pay-card" onclick="payByCard('${j.id}','${i}',getPayAmount(${i}))">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="font-size:26px">💳</div>
        <div>
          <div class="pay-box-title">Charge card</div>
          <div class="pay-box-sub" id="pay-card-sub-${i}">Charge $${price.toFixed(2)} to card on file</div>
          ${stripeNote}
        </div>
        <i class="ti ti-chevron-right" style="margin-left:auto;color:var(--ink3)"></i>
      </div>
    </div>

    <div class="pay-box pay-invoice" onclick="payByInvoice('${j.id}','${i}',getPayAmount(${i}))">
      <div style="display:flex;align-items:center;gap:12px">
        <div style="font-size:26px">📨</div>
        <div>
          <div class="pay-box-title">Send invoice</div>
          <div class="pay-box-sub" id="pay-inv-sub-${i}">Text them a payment link for $${price.toFixed(2)}</div>
          ${stripeNote}
        </div>
        <i class="ti ti-chevron-right" style="margin-left:auto;color:var(--ink3)"></i>
      </div>
    </div>
  </div>`;
}

function getPayAmount(i){
  const el=document.getElementById('pay-amount-'+i);
  return el?parseFloat(el.value)||0:0;
}

function updatePayAmount(i){
  const el=document.getElementById('pay-amount-'+i);
  if(!el)return;
  const amt=parseFloat(el.value)||0;
  const noteEl=document.getElementById('pay-extra-note-'+i);
  const cardSub=document.getElementById('pay-card-sub-'+i);
  const invSub=document.getElementById('pay-inv-sub-'+i);
  if(noteEl)noteEl.style.display=amt>0?'':'none';
  if(cardSub)cardSub.textContent=`Charge $${amt.toFixed(2)} to card on file`;
  if(invSub)invSub.textContent=`Text them a payment link for $${amt.toFixed(2)}`;
}

function resetPayAmount(i,basePrice){
  const el=document.getElementById('pay-amount-'+i);
  if(el){el.value=parseFloat(basePrice).toFixed(2);updatePayAmount(i);}
}

function payByCash(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  if(!confirm(`Mark $${parseFloat(price).toFixed(2)} cash/check payment received from ${c?custFullName(c):'customer'}?`))return;
  recordPayment(custId,i,'cash',price);
}

function payByCard(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  const name=c?custFullName(c):'customer';
  const amount=parseFloat(price).toFixed(2);
  const hasStripeId=c&&c.stripeCustomerId&&c.stripeCustomerId.startsWith('cus_');
  const link=c&&c.payLink?c.payLink:getBestPayLink(price);

  const card=document.getElementById('jcard-'+i);
  if(!card)return;
  const paySection=card.querySelector('.pay-box.pay-card');
  if(!paySection)return;
  const parent=paySection.closest('div[style*="margin-bottom"]');
  if(!parent)return;

  if(hasStripeId){
    // Charge card on file via Netlify backend
    parent.innerHTML=`
      <div class="pay-confirm-card" style="background:var(--bp);border-radius:var(--rl);padding:1rem;margin-bottom:.875rem">
        <div style="font-weight:700;font-size:15px;color:var(--blue);margin-bottom:.75rem"><i class="ti ti-credit-card"></i> Charge card on file — ${name}</div>
        <div class="pay-amount">$${amount}</div>
        <p style="font-size:13px;color:var(--ink3);text-align:center;margin:.75rem 0">Charges the card saved in Stripe for this customer.</p>
        <button class="btn btng" style="width:100%;margin-bottom:.5rem" id="charge-btn-${i}" onclick="executeCardCharge('${custId}','${i}',${price})">
          <i class="ti ti-credit-card"></i> Charge $${amount} now
        </button>
        <button class="btn btn-ghost bsm" style="width:100%" onclick="rerenderJCard(${i})"><i class="ti ti-arrow-left"></i> Back</button>
      </div>`;
  } else if(link){
    // No Stripe ID — fall back to payment link
    parent.innerHTML=`
      <div class="pay-confirm-card" style="background:var(--bp);border-radius:var(--rl);padding:1rem;margin-bottom:.875rem">
        <div style="font-weight:700;font-size:15px;color:var(--blue);margin-bottom:.75rem"><i class="ti ti-credit-card"></i> Charge card — ${name}</div>
        <div class="pay-amount">$${amount}</div>
        <div style="background:#fff3cd;border-radius:8px;padding:.625rem;font-size:12px;color:#856404;margin-bottom:.875rem">No Stripe Customer ID set — using payment link instead. Add their Stripe ID in Edit customer to enable one-tap charging.</div>
        <button class="btn btng" style="width:100%;margin-bottom:.5rem" onclick="window.open('${link}','_blank')"><i class="ti ti-external-link"></i> Open payment page — $${amount}</button>
        <button class="btn btng" style="width:100%;margin-bottom:.5rem" onclick="recordPayment('${custId}','${i}','card')"><i class="ti ti-check"></i> Confirm charged</button>
        <button class="btn btn-ghost bsm" style="width:100%" onclick="rerenderJCard(${i})"><i class="ti ti-arrow-left"></i> Back</button>
      </div>`;
  } else {
    parent.innerHTML=`
      <div class="pay-confirm-card" style="background:var(--bp);border-radius:var(--rl);padding:1rem;margin-bottom:.875rem">
        <div style="font-weight:700;font-size:15px;color:var(--blue);margin-bottom:.75rem"><i class="ti ti-credit-card"></i> Charge card — ${name}</div>
        <div class="pay-amount">$${amount}</div>
        <div style="background:var(--rp);border-radius:8px;padding:.625rem;font-size:12px;color:var(--red);margin-bottom:.875rem">No Stripe Customer ID or payment link set up. Edit this customer to add one.</div>
        <button class="btn btng" style="width:100%;margin-bottom:.5rem" onclick="openCustModal('${custId}')"><i class="ti ti-edit"></i> Edit customer</button>
        <button class="btn btn-ghost bsm" style="width:100%" onclick="rerenderJCard(${i})"><i class="ti ti-arrow-left"></i> Back</button>
      </div>`;
  }
}

async function executeCardCharge(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  const btn=document.getElementById('charge-btn-'+i);
  if(btn){btn.disabled=true;btn.innerHTML='<span class="spin"></span> Charging...';}
  try{
    const res=await fetch('https://effervescent-pie-af6453.netlify.app/.netlify/functions/charge',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        stripeCustomerId:c.stripeCustomerId,
        amount:parseFloat(price),
        description:`Lawn service — ${custFullName(c)} — ${todayStr()}`,
        customerName:custFullName(c)
      })
    });
    const data=await res.json();
    if(data.success){
      recordPayment(custId,i,'card',parseFloat(price));
      alert(`✓ $${parseFloat(price).toFixed(2)} charged successfully!`);
    } else {
      if(btn){btn.disabled=false;btn.innerHTML='<i class="ti ti-credit-card"></i> Retry charge';}
      alert('Charge failed: '+(data.error||'Unknown error')+'\n\nCheck that this customer has a card saved in Stripe.');
    }
  }catch(e){
    if(btn){btn.disabled=false;btn.innerHTML='<i class="ti ti-credit-card"></i> Retry charge';}
    alert('Connection error. Check your internet and try again.');
  }
}

function payByInvoice(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c){alert('Customer not found.');return;}
  const amount=parseFloat(price).toFixed(2);
  // Use customer-specific link, or price-matched, or default
  const link=c.payLink||getBestPayLink(price);
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';

  if(!link){
    alert('No payment link set up yet. Go to Reports → Payment settings and add your Stripe link first.');
    goTab('reports');
    return;
  }

  if(!c.phone&&!c.email){
    alert('No phone or email on file for this customer. Edit their record to add contact info.');
    return;
  }

  const card=document.getElementById('jcard-'+i);
  if(!card)return;
  const paySection=card.querySelector('.pay-box.pay-invoice');
  if(!paySection)return;
  const parent=paySection.closest('div[style*="margin-bottom"]');
  if(!parent)return;

  const msgBody=`Hi ${c.first}! Your lawn service is complete. Amount due: $${amount}. Pay securely here: ${link} — Thanks, ${bizName}`;

  parent.innerHTML=`
    <div style="background:var(--ambp);border:1px solid #f0c070;border-radius:var(--rl);padding:1rem;margin-bottom:.875rem">
      <div style="font-weight:700;font-size:15px;color:var(--amb);margin-bottom:.75rem"><i class="ti ti-send" style="font-size:16px"></i> Send invoice — ${custFullName(c)}</div>
      <div style="background:var(--s);border-radius:var(--r);padding:.75rem;font-size:13px;line-height:1.6;color:var(--ink2);margin-bottom:.875rem;border:1px solid var(--bd)">${msgBody}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
        ${c.phone?`<button class="btn btna" onclick="sendInvoiceText('${custId}','${i}',${price})"><i class="ti ti-message"></i> Send text</button>`:'<div></div>'}
        ${c.email?`<button class="btn btna" onclick="sendInvoiceEmail('${custId}','${i}',${price})"><i class="ti ti-mail"></i> Send email</button>`:'<div></div>'}
      </div>
      <button class="btn btn-ghost bsm" style="width:100%;margin-top:.5rem" onclick="rerenderJCard(${i})"><i class="ti ti-arrow-left"></i> Back</button>
    </div>`;
}

function sendInvoiceText(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c||!c.phone){alert('No phone number.');return;}
  const amount=parseFloat(price).toFixed(2);
  const link=c.payLink||getBestPayLink(price)||'';
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';
  const msg=`Hi ${c.first}! Your lawn service is complete. Amount due: $${amount}. Pay securely here: ${link} — Thanks, ${bizName}`;
  window.open('sms:'+c.phone.replace(/\D/g,'')+'?body='+encodeURIComponent(msg),'_blank');
  // Mark invoice as sent after opening SMS
  setTimeout(()=>{recordPayment(custId,i,'invoice');},1500);
}

function sendInvoiceEmail(custId,i,price){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c||!c.email){alert('No email address.');return;}
  const amount=parseFloat(price).toFixed(2);
  const link=c.payLink||getBestPayLink(price)||'';
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';
  const subject=`${bizName} — Invoice $${amount}`;
  const body=`Hi ${c.first},\n\nYour lawn service is complete. Amount due: $${amount}.\n\nPay securely here: ${link}\n\nThank you!\n${bizName}`;
  window.open('mailto:'+c.email+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body),'_blank');
  setTimeout(()=>{recordPayment(custId,i,'invoice');},1500);
}

function recordPayment(custId,i,method,chargedAmount){
  const j=trackerRoute&&trackerRoute.jobs[parseInt(i)];
  const c=DB.customers.find(x=>x.id===custId);
  const price=chargedAmount||parseFloat(c&&c.price||0);
  const existing=DB.jobHistory.findIndex(x=>x.custId===custId&&x.date===todayStr());
  if(existing>=0){
    DB.jobHistory[existing].paid=method!=='invoice';
    DB.jobHistory[existing].paidMethod=method;
    DB.jobHistory[existing].chargedAmount=price;
  } else {
    DB.jobHistory.push({id:uid(),custId,date:todayStr(),actualMin:0,estMin:j?j.estMin:0,paid:method!=='invoice',paidMethod:method,chargedAmount:price,beforePhotos:[],afterPhotos:[],extraPhotos:[],notes:''});
  }
  saveDB();
  if(method==='cash'){
    syncPaymentToHubSpot(custId,price,'Cash/Check',todayStr());
  }
  rerenderJCard(parseInt(i));
}

function rerenderJCard(i){
  const card=document.getElementById('jcard-'+i);
  if(!card||!trackerRoute)return;
  const tmp=document.createElement('div');
  tmp.innerHTML=buildJobCard(trackerRoute.jobs[i],i);
  card.replaceWith(tmp.firstElementChild);
  if(getTS(i).status==='active')startTick(i);
}

function startTick(i){
  const s=getTS(i);
  if(s.interval)return;
  s.interval=setInterval(()=>{
    const el=document.getElementById('jtimer-'+i);
    if(el)el.textContent=fmtTimer(getElap(i));
    // FIX: periodically persist tracker state so timer survives accidental reload
    saveTrackerStates();
  },1000);
}
function stopTick(i){const s=getTS(i);clearInterval(s.interval);s.interval=null;}

function startJob(i){
  if(!hasBefore(i)){alert('Take a before photo first.');return;}
  const s=getTS(i);s.status='active';s.startMs=Date.now();s.expanded=true;
  saveTrackerStates();
  rerenderJCard(i);
}
function pauseJob(i){
  const s=getTS(i);
  s.elapsed+=Math.floor((Date.now()-s.startMs)/1000);
  s.startMs=null;
  stopTick(i);
  s.status='pending';
  saveTrackerStates();
  rerenderJCard(i);
}
function isBase64Photo(str){
  return typeof str==='string'&&str.startsWith('data:image');
}

// Convert base64 data URL to a Blob for uploading
function base64ToBlob(dataUrl){
  const parts=dataUrl.split(',');
  const mime=parts[0].match(/:(.*?);/)[1];
  const bytes=atob(parts[1]);
  const arr=new Uint8Array(bytes.length);
  for(let i=0;i<bytes.length;i++)arr[i]=bytes.charCodeAt(i);
  return new Blob([arr],{type:mime});
}

// Upload a single photo to Supabase Storage, return public URL
async function uploadPhotoToStorage(base64,jobId,type,idx){
  try{
    const blob=base64ToBlob(base64);
    const ext=blob.type.includes('png')?'png':'jpg';
    const path=`${jobId}/${type}-${idx+1}.${ext}`;
    const {data,error}=await supabaseClient.storage
      .from('job-photos')
      .upload(path,blob,{contentType:blob.type,upsert:true});
    if(error){console.log('Photo upload error',error);return null;}
    const {data:urlData}=supabaseClient.storage
      .from('job-photos')
      .getPublicUrl(path);
    return urlData.publicUrl||null;
  }catch(e){
    console.log('Photo upload error',e);
    return null;
  }
}

// Upload all photos for a job, replace base64 with URLs where successful
async function uploadJobPhotos(jobRec,trackerState,onProgress){
  const types=[
    {key:'beforePhotos',urlKey:'beforePhotoUrls',label:'before'},
    {key:'afterPhotos',urlKey:'afterPhotoUrls',label:'after'},
    {key:'extraPhotos',urlKey:'extraPhotoUrls',label:'extra'}
  ];
  let uploaded=0,total=0;
  types.forEach(t=>{total+=(trackerState[t.key]||[]).filter(isBase64Photo).length;});
  if(!jobRec.beforePhotoUrls)jobRec.beforePhotoUrls=[];
  if(!jobRec.afterPhotoUrls)jobRec.afterPhotoUrls=[];
  if(!jobRec.extraPhotoUrls)jobRec.extraPhotoUrls=[];

  for(const t of types){
    const photos=trackerState[t.key]||[];
    const urls=jobRec[t.urlKey]||[];
    for(let idx=0;idx<photos.length;idx++){
      const p=photos[idx];
      if(!isBase64Photo(p)){
        // Already a URL — keep it
        if(!urls[idx])urls[idx]=p;
        continue;
      }
      if(onProgress)onProgress(++uploaded,total);
      const url=await uploadPhotoToStorage(p,jobRec.id,t.label,idx);
      if(url){
        urls[idx]=url;
        // Replace base64 with URL in tracker state to free memory
        photos[idx]=url;
      } else {
        urls[idx]=p; // keep base64 as fallback if upload failed
      }
    }
    jobRec[t.urlKey]=urls;
    trackerState[t.key]=photos;
  }
  return jobRec;
}

function finishJob(i){
  if(!hasAfter(i)){alert('Take an after photo first.');return;}
  const s=getTS(i);
  if(s.startMs){s.elapsed+=Math.floor((Date.now()-s.startMs)/1000);s.startMs=null;}
  stopTick(i);s.status='done';s.actualMin=Math.round(s.elapsed/60);
  const j=trackerRoute.jobs[i];
  const existing=DB.jobHistory.findIndex(x=>x.custId===j.id&&x.date===todayStr());
  const rec={
    id:existing>=0?DB.jobHistory[existing].id:uid(),
    custId:j.id,
    date:todayStr(),
    actualMin:s.actualMin,
    estMin:j.estMin,
    paid:false,
    paidMethod:null,
    beforePhotos:s.beforePhotos,
    afterPhotos:s.afterPhotos,
    extraPhotos:s.extraPhotos,
    beforePhotoUrls:[],
    afterPhotoUrls:[],
    extraPhotoUrls:[],
    notes:s.notes
  };
  if(existing>=0)DB.jobHistory[existing]=rec;else DB.jobHistory.push(rec);

  // Show uploading state on card
  const card=document.getElementById('jcard-'+i);
  if(card){
    const uploadBanner=document.createElement('div');
    uploadBanner.id='upload-banner-'+i;
    uploadBanner.style.cssText='background:var(--bp);border-radius:8px;padding:.625rem .875rem;font-size:13px;color:var(--blue);font-weight:600;margin-bottom:.75rem;display:flex;align-items:center;gap:8px';
    uploadBanner.innerHTML='<span class="spin" style="border-top-color:var(--blue);border-color:rgba(21,101,192,.2)"></span> Uploading photos...';
    const body=card.querySelector('.job-body2');
    if(body)body.prepend(uploadBanner);
  }

  // Upload photos async, then save
  uploadJobPhotos(rec,s,(done,total)=>{
    const banner=document.getElementById('upload-banner-'+i);
    if(banner)banner.innerHTML=`<span class="spin" style="border-top-color:var(--blue);border-color:rgba(21,101,192,.2)"></span> Uploading photos (${done}/${total})...`;
  }).then(()=>{
    if(existing>=0)DB.jobHistory[existing]=rec;else{
      const idx2=DB.jobHistory.findIndex(x=>x.id===rec.id);
      if(idx2>=0)DB.jobHistory[idx2]=rec;
    }
    saveDB();
    saveTrackerStates();
    rerenderJCard(i);
  });
}

function markJobPaid(custId,i){
  const rec=getJobRecord(custId);
  if(rec){rec.paid=true;rec.paidMethod='cash';saveDB();}
  else{DB.jobHistory.push({id:uid(),custId,date:todayStr(),actualMin:0,estMin:0,paid:true,paidMethod:'cash',beforePhotos:[],afterPhotos:[],extraPhotos:[],notes:''});saveDB();}
  rerenderJCard(parseInt(i));
}

function saveHubSpotKey(){
  const key=document.getElementById('hs-key').value.trim();
  DB.settings.hubspotKey=key;
  saveDB();
  const msg=document.getElementById('hs-save-msg');
  msg.textContent='✓ Saved';msg.style.display='';
  setTimeout(()=>msg.style.display='none',2000);
}

function textCustomer(custId){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c||!c.phone){alert('No phone number for this customer.');return;}
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';
  const serviceLabel={mow:'lawn mowing',mow_edge:'lawn mowing and edging',full:'lawn mowing, edging and blowing',cleanup:'full lawn cleanup'}[c.serviceType||'mow']||'lawn service';
  const msg=`Hi ${c.first}! Your ${serviceLabel} is complete for today. Thanks for your business! — ${bizName}`;
  window.open('sms:'+c.phone.replace(/\D/g,'')+'?body='+encodeURIComponent(msg));
}

function toggleJCard(i){
  const s=getTS(i);if(s.status!=='pending')return;
  s.expanded=!s.expanded;
  const card=document.getElementById('jcard-'+i);if(!card)return;
  if(s.expanded)card.classList.add('exp');else card.classList.remove('exp');
}
function navTo(addr){window.open('https://maps.google.com/?q='+encodeURIComponent(addr),'_blank');}

function addPhoto(i,type,input){
  const file=input.files[0];if(!file)return;
  const reader=new FileReader();
  reader.onload=e=>{
    const s=getTS(i);
    if(type==='before')s.beforePhotos.push(e.target.result);
    else if(type==='after')s.afterPhotos.push(e.target.result);
    else s.extraPhotos.push(e.target.result);
    input.value='';
    saveTrackerStates();
    rerenderJCard(i);
  };
  reader.readAsDataURL(file);
}

// Photo viewer
function openPV(i,type,idx){
  pvJob=i;pvType=type;pvIdx=idx;
  const s=getTS(i);
  const photos=type==='before'?s.beforePhotos:type==='after'?s.afterPhotos:s.extraPhotos;
  const urlPhotos=type==='before'?s.beforePhotoUrls:type==='after'?s.afterPhotoUrls:s.extraPhotoUrls;
  // Prefer URL over base64 for display
  const src=(urlPhotos&&urlPhotos[idx])||photos[idx];
  document.getElementById('pv-img').src=src;
  document.getElementById('pv-lbl').textContent={before:'Before',after:'After',extra:'Extra'}[type]+' photo '+(idx+1)+' of '+photos.length;
  document.getElementById('pviewer').classList.add('open');
}
function closePV(){document.getElementById('pviewer').classList.remove('open');pvJob=null;}
function dlPhoto(){
  if(pvJob===null)return;
  const s=getTS(pvJob);
  const photos=pvType==='before'?s.beforePhotos:pvType==='after'?s.afterPhotos:s.extraPhotos;
  const j=trackerRoute&&trackerRoute.jobs[pvJob];
  const name=(j?j.name||'Job':'Photo').replace(/[^a-z0-9]/gi,'_')+'-'+pvType+'-'+(pvIdx+1)+'.jpg';
  const a=document.createElement('a');a.href=photos[pvIdx];a.download=name;a.click();
}
function delPhoto(){
  if(pvJob===null)return;if(!confirm('Delete this photo?'))return;
  const s=getTS(pvJob);
  const arr=pvType==='before'?s.beforePhotos:pvType==='after'?s.afterPhotos:s.extraPhotos;
  arr.splice(pvIdx,1);
  saveTrackerStates();
  closePV();rerenderJCard(pvJob);
}

async function exportDaySummary(){
  if(!trackerRoute){alert('No route loaded.');return;}
  const dateStr=new Date().toLocaleDateString('en-US',{weekday:'long',year:'numeric',month:'long',day:'numeric'});
  const zip=new JSZip();
  trackerRoute.jobs.forEach((j,i)=>{
    const s=getTS(i);
    const actualMin=s.actualMin||Math.round(s.elapsed/60);
    const c=DB.customers.find(x=>x.id===j.id);
    const price=c?parseFloat(c.price||0):0;
    function pSection(photos,urlPhotos,label,prefix){
      const srcs=photos.map((p,pi)=>(urlPhotos&&urlPhotos[pi])||p).filter(Boolean);
      if(!srcs.length)return `<p style="color:#aaa;font-size:13px">No ${label.toLowerCase()} taken</p>`;
      return srcs.map((p,pi)=>`<div style="margin-bottom:12px"><img src="${p}" style="width:100%;max-width:340px;border-radius:8px;border:1px solid #ddd;display:block;margin-bottom:6px">${isBase64Photo(p)?`<a href="${p}" download="${prefix}-${pi+1}.jpg" style="font-size:12px;color:#2d5a27;font-weight:600;text-decoration:none">⬇ Save ${label} ${pi+1}</a>`:`<a href="${p}" target="_blank" style="font-size:12px;color:#2d5a27;font-weight:600;text-decoration:none">🔗 View ${label} ${pi+1}</a>`}</div>`).join('');
    }
    const safe=(j.name||'Job').replace(/[^a-z0-9]/gi,'_');
    const html=`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${j.name} — Job Summary</title><style>body{font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:2rem 1.25rem;color:#1a1a1a}h1{color:#2d5a27;font-size:22px;margin-bottom:.25rem}.co{font-size:13px;color:#888;margin-bottom:1.5rem}.badge{display:inline-block;padding:4px 14px;border-radius:99px;font-size:12px;font-weight:700;text-transform:uppercase;background:${s.status==='done'?'#d4edda':'#fff3cd'};color:${s.status==='done'?'#155724':'#856404'};margin-bottom:1.5rem}.grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:1rem;margin-bottom:1.5rem}.box{background:#f7f8f5;border-radius:8px;padding:.875rem}.lbl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:.25rem}.val{font-size:18px;font-weight:600}.section{margin-bottom:1.5rem}.stitle{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#888;margin-bottom:.75rem;padding-bottom:.375rem;border-bottom:1px solid #eee}hr{border:none;border-top:1px solid #eee;margin:1.5rem 0}.nbox{background:#f7f8f5;border-radius:8px;padding:.875rem;font-size:14px;white-space:pre-wrap;line-height:1.6}footer{font-size:12px;color:#aaa;text-align:center;margin-top:2rem;padding-top:1rem;border-top:1px solid #eee}</style></head><body>
<h1>${j.name||'Job #'+(i+1)}</h1><div class="co">Richardson Outdoor Solutions · ${dateStr}</div>
<span class="badge">${s.status==='done'?'✓ Complete':'In Progress'}</span>
<div class="section"><div class="lbl">Address</div><div style="font-size:15px">${j.addr}</div></div>
<div class="grid">
  <div class="box"><div class="lbl">Actual time</div><div class="val">${actualMin>0?actualMin+' min':'—'}</div></div>
  <div class="box"><div class="lbl">Estimated</div><div class="val">${j.estMin} min</div></div>
  <div class="box"><div class="lbl">Amount due</div><div class="val" style="color:#2d5a27">$${price.toFixed(2)}</div></div>
</div>
${j.notes?`<div class="section"><div class="lbl">Job notes</div><div class="nbox">${j.notes}</div></div>`:''}
${s.notes?`<div class="section"><div class="lbl">Field notes</div><div class="nbox">${s.notes}</div></div>`:''}
<hr>
<div class="section"><div class="stitle">📷 Before photos (${s.beforePhotos.length})</div>${pSection(s.beforePhotos,s.beforePhotoUrls,'Before',safe+'-before')}</div>
<div class="section"><div class="stitle">✅ After photos (${s.afterPhotos.length})</div>${pSection(s.afterPhotos,s.afterPhotoUrls,'After',safe+'-after')}</div>
${s.extraPhotos.length?`<div class="section"><div class="stitle">📸 Extra photos (${s.extraPhotos.length})</div>${pSection(s.extraPhotos,s.extraPhotoUrls,'Extra',safe+'-extra')}</div>`:''}
<footer>Richardson Outdoor Solutions Field Tracker</footer></body></html>`;
    zip.file('Stop-'+(i+1)+'-'+safe+'.html',html);
    const folder=safe;
    // Only include base64 photos in zip — uploaded ones are accessible by URL
    s.beforePhotos.forEach((p,pi)=>{if(isBase64Photo(p)){const b=p.split(',')[1];if(b)zip.file(folder+'/before-'+(pi+1)+'.jpg',b,{base64:true});}});
    s.afterPhotos.forEach((p,pi)=>{if(isBase64Photo(p)){const b=p.split(',')[1];if(b)zip.file(folder+'/after-'+(pi+1)+'.jpg',b,{base64:true});}});
    s.extraPhotos.forEach((p,pi)=>{if(isBase64Photo(p)){const b=p.split(',')[1];if(b)zip.file(folder+'/extra-'+(pi+1)+'.jpg',b,{base64:true});}});
  });
  try{const blob=await zip.generateAsync({type:'blob'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='ROS-Day-'+todayStr()+'.zip';a.click();}
  catch(e){alert('Export failed: '+e);}
}

// Load modal
function openLoadModal(){document.getElementById('load-error').style.display='none';document.getElementById('load-modal').classList.add('open');}
function loadRouteFromCode(){
  const raw=document.getElementById('load-code').value.trim();
  const errEl=document.getElementById('load-error');
  if(!raw){errEl.textContent='Paste a route code first.';errEl.style.display='';return;}
  let p;try{p=JSON.parse(raw);}catch(e){errEl.textContent='Invalid code — copy it again from Route Planner.';errEl.style.display='';return;}
  if(!p.jobs||!p.jobs.length){errEl.textContent='Route has no jobs.';errEl.style.display='';return;}
  trackerStates={};
  saveTrackerStates();
  loadTrackerRoute(p);closeModal('load-modal');
  document.getElementById('load-code').value='';
}

// ══ CUSTOMERS ════════════════════════════════════════════════════
let custFilter='all', custEditId=null;

function setCustFilter(f,btn){
  custFilter=f;
  document.querySelectorAll('.pill-tab').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderCustomers();
}

function renderCustomers(){
  const q=(document.getElementById('cust-search').value||'').toLowerCase();
  const sortVal=(document.getElementById('cust-sort')||{}).value||'recent';
  let list=DB.customers.filter(c=>{
    if(q&&!custFullName(c).toLowerCase().includes(q)&&!c.addr.toLowerCase().includes(q))return false;
    if(custFilter==='active')return c.sched!=='inactive';
    if(custFilter==='weekly')return c.sched==='weekly';
    if(custFilter==='biweekly')return c.sched==='biweekly';
    if(custFilter==='inactive')return c.sched==='inactive';
    return true;
  });
  // Sort
  if(sortVal==='az'){list=[...list].sort((a,b)=>custFullName(a).localeCompare(custFullName(b)));}
  else if(sortVal==='day'){list=[...list].sort((a,b)=>parseInt(a.day||0)-parseInt(b.day||0));}
  else if(sortVal==='zip'){list=[...list].sort((a,b)=>(a.zip||'').localeCompare(b.zip||''));}
  // default 'recent' = insertion order (as loaded from DB)
  document.getElementById('cust-count-lbl').textContent=list.length+' customer'+(list.length!==1?'s':'');
  if(!list.length){
    document.getElementById('cust-list').innerHTML=`<div class="empty-state"><i class="ti ti-users"></i><p>No customers yet</p><small>Import from HubSpot or add manually</small></div>`;
    return;
  }
  const schedBadge={weekly:'tag-green',biweekly:'tag-blue',onetime:'tag-amb',paused:'tag-amb',inactive:'tag-gray'};
  const schedLbl={weekly:'Weekly',biweekly:'Biweekly',onetime:'One-time',paused:'Paused',inactive:'Inactive'};
  document.getElementById('cust-list').innerHTML=list.map(c=>{
    const jobs=DB.jobHistory.filter(j=>j.custId===c.id);
    const lastJob=jobs.length?jobs.sort((a,b)=>b.date.localeCompare(a.date))[0]:null;
    const isCoord=/^-?\d{1,3}\.\d+,\s*-?\d{1,3}\.\d+/.test(c.addr||'');
    const coordBadge=isCoord?`<span class="coord-warn"><i class="ti ti-map-pin" style="font-size:9px"></i> Fix address</span>`:'';
    return `<div class="cust-card" id="cc-${c.id}">
      <div class="cust-hdr" onclick="toggleCust('${c.id}')">
        <div class="cust-avatar">${initials(c)}</div>
        <div class="cust-info">
          <div class="cust-name">${custFullName(c)}${coordBadge}</div>
          <div class="cust-meta">${custAddr(c)}${c.price?' · $'+parseFloat(c.price).toFixed(0):''}</div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;flex-shrink:0">
          <span class="tag ${schedBadge[c.sched]||'tag-gray'}">${schedLbl[c.sched]||c.sched}</span>
          <span style="font-size:10px;color:var(--ink3)">${DAYS_FULL[parseInt(c.day||0)]}</span>
        </div>
      </div>
      <div class="cust-body">
        <div class="detail-grid">
          <div class="detail-item"><div class="dl">Phone</div><div class="dv">${c.phone||'—'}</div></div>
          <div class="detail-item"><div class="dl">Email</div><div class="dv" style="font-size:12px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${c.email||'—'}</div></div>
          <div class="detail-item"><div class="dl">Mow time</div><div class="dv">${fmtMins(c.mowTime)}</div></div>
          <div class="detail-item"><div class="dl">Price</div><div class="dv" style="color:var(--green)">$${parseFloat(c.price||0).toFixed(2)}</div></div>
          <div class="detail-item"><div class="dl">Jobs done</div><div class="dv">${jobs.length}</div></div>
          <div class="detail-item"><div class="dl">Last service</div><div class="dv" style="font-size:12px">${lastJob?fmtDate(lastJob.date):'Never'}</div></div>
        </div>
        ${c.gate?`<div style="background:var(--ambp);border-radius:8px;padding:.625rem .75rem;font-size:13px;color:var(--amb);margin-bottom:.75rem"><i class="ti ti-key" style="font-size:13px"></i> ${c.gate}</div>`:''}
        ${c.sched==='paused'?`<div style="background:var(--ambp);border:1px solid #f0c070;border-radius:8px;padding:.625rem .75rem;font-size:13px;color:var(--amb);margin-bottom:.75rem"><i class="ti ti-player-pause" style="font-size:13px"></i> <strong>Paused</strong>${c.resumeDate?' · Resumes '+fmtDate(c.resumeDate):''}${c.pauseReason?' · '+c.pauseReason:''}</div>`:''}
        ${c.notes?`<div style="background:var(--s2);border-radius:8px;padding:.625rem .75rem;font-size:13px;color:var(--ink2);margin-bottom:.75rem">${c.notes}</div>`:''}
        ${c.serviceType&&c.serviceType!=='mow'?`<div style="font-size:11px;color:var(--ink3);margin-bottom:.75rem"><i class="ti ti-list-check" style="font-size:11px"></i> Service: <strong>${{mow:'Mow only',mow_edge:'Mow + Edge',full:'Mow + Edge + Blow',cleanup:'Full cleanup'}[c.serviceType]||c.serviceType}</strong></div>`:''}
        <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:.5rem">
          <button class="btn bsm btng" onclick="openCustModal('${c.id}')"><i class="ti ti-edit"></i> Edit</button>
          ${c.phone?`<button class="btn bsm" onclick="window.open('tel:'+('${c.phone}'.replace(/\\D/g,'')))"><i class="ti ti-phone"></i> Call</button>`:''}
          ${c.phone?`<button class="btn bsm" onclick="sendOnMyWay('${c.id}')"><i class="ti ti-navigation"></i> On my way</button>`:''}
          ${c.phone?`<button class="btn bsm" onclick="window.open('sms:'+('${c.phone}'.replace(/\\D/g,'')))"><i class="ti ti-message"></i> Text</button>`:''}
          ${c.hubspotUrl?`<button class="btn bsm btnb" onclick="window.open('${c.hubspotUrl}','_blank')"><i class="ti ti-brand-hubspot"></i> HubSpot</button>`:''}
          <button class="btn bsm btnb" onclick="sendCardSetupLink('${c.id}')"><i class="ti ti-credit-card"></i> Send card setup</button>
          <button class="btn bsm btnr" onclick="deleteCust('${c.id}')"><i class="ti ti-trash"></i> Delete</button>
        </div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          ${c.sched==='paused'?`<button class="btn bsm btng" onclick="resumeCust('${c.id}')"><i class="ti ti-player-play"></i> Resume schedule</button>`:`<button class="btn bsm" onclick="pauseCust('${c.id}')"><i class="ti ti-player-pause"></i> Pause schedule</button>`}
          <button class="btn bsm" onclick="skipNextWeek('${c.id}')"><i class="ti ti-calendar-off"></i> Skip next visit</button>
        </div>
        ${renderCustHistory(c.id)}
      </div>
    </div>`;
  }).join('');
}

function toggleCust(id){
  const card=document.getElementById('cc-'+id);
  if(card)card.classList.toggle('open');
}

function openCustModal(id){
  custEditId=id||null;
  const title=id?'Edit Customer':'Add Customer';
  document.getElementById('cust-modal-title').textContent=title;
  document.getElementById('cust-edit-id').value=id||'';
  const c=id?DB.customers.find(x=>x.id===id):null;
  ['first','last','addr','zip','phone','email','gate','notes'].forEach(f=>{
    document.getElementById('cf-'+f).value=c?c[f]||'':'';
  });
  document.getElementById('cf-hubspot').value=c?c.hubspotUrl||'':'';
  document.getElementById('cf-hubspot-id').value=c?c.hubspotContactId||'':'';
  document.getElementById('cf-stripe-id').value=c?c.stripeCustomerId||'':'';
  document.getElementById('cf-paymethod').value=c?c.payMethod||'cash':'cash';
  document.getElementById('cf-paylink').value=c?c.payLink||'':'';
  document.getElementById('cf-service').value=c?c.serviceType||'mow':'mow';
  document.getElementById('cf-resume').value=c?c.resumeDate||'':'';
  document.getElementById('cf-pause-reason').value=c?c.pauseReason||'':'';
  document.getElementById('cf-start-date').value=c?c.startDate||'':'';
  document.getElementById('cf-biweekly-week').value=c?c.biweeklyWeek||'A':'A';
  document.getElementById('cf-sched').value=c?c.sched||'weekly':'weekly';
  // Show/hide biweekly row and pause row based on schedule
  const updateSchedRows=()=>{
    const v=document.getElementById('cf-sched').value;
    document.getElementById('cf-pause-row').style.display=v==='paused'?'':'none';
    document.getElementById('cf-biweekly-row').style.display=v==='biweekly'?'':'none';
  };
  updateSchedRows();
  document.getElementById('cf-sched').onchange=updateSchedRows;
  document.getElementById('cf-day').value=c?c.day||'1':'1';
  document.getElementById('cf-price').value=c?c.price||'':'';
  document.getElementById('cf-mow').value=c?c.mowTime||45:45;
  document.getElementById('cf-size').value=c?c.size||'md':'md';
  document.getElementById('cust-modal').classList.add('open');
}

function saveCust(){
  const id=document.getElementById('cust-edit-id').value||uid();
  const existing=DB.customers.find(x=>x.id===id);
  const c={
    id,
    first:document.getElementById('cf-first').value.trim(),
    last:document.getElementById('cf-last').value.trim(),
    addr:document.getElementById('cf-addr').value.trim(),
    zip:document.getElementById('cf-zip').value.trim(),
    phone:document.getElementById('cf-phone').value.trim(),
    email:document.getElementById('cf-email').value.trim(),
    sched:document.getElementById('cf-sched').value,
    day:document.getElementById('cf-day').value,
    price:document.getElementById('cf-price').value,
    mowTime:parseInt(document.getElementById('cf-mow').value)||45,
    size:document.getElementById('cf-size').value,
    gate:document.getElementById('cf-gate').value.trim(),
    notes:document.getElementById('cf-notes').value.trim(),
    hubspotUrl:document.getElementById('cf-hubspot').value.trim(),
    hubspotContactId:document.getElementById('cf-hubspot-id').value.trim(),
    stripeCustomerId:document.getElementById('cf-stripe-id').value.trim(),
    payMethod:document.getElementById('cf-paymethod').value,
    payLink:document.getElementById('cf-paylink').value.trim(),
    serviceType:document.getElementById('cf-service').value,
    resumeDate:document.getElementById('cf-resume').value||null,
    pauseReason:document.getElementById('cf-pause-reason').value.trim(),
    startDate:document.getElementById('cf-start-date').value||null,
    biweeklyWeek:document.getElementById('cf-biweekly-week').value||'A',
    skipWeeks:existing?existing.skipWeeks||[]:[]
  };
  if(!c.first&&!c.last){alert('Enter at least a first or last name.');return;}
  const idx=DB.customers.findIndex(x=>x.id===id);
  if(idx>=0)DB.customers[idx]=c;else DB.customers.push(c);
  saveDB();closeModal('cust-modal');renderCustomers();
}

function deleteCust(id){
  if(!confirm('Delete this customer? Their job history will be kept.'))return;
  DB.customers=DB.customers.filter(c=>c.id!==id);
  saveDB();renderCustomers();
}

// ══ IMPORT ════════════════════════════════════════════════════════
let importRows=[];
function openImportModal(){document.getElementById('import-modal').classList.add('open');}
function handleImportDrop(e){e.preventDefault();document.getElementById('import-dz').style.borderColor='var(--bd)';const f=e.dataTransfer.files[0];if(f)handleImportFile(f);}
function handleImportFile(file){
  if(!file)return;
  const r=new FileReader();
  r.onload=function(e){
    try{
      const wb=XLSX.read(e.target.result,{type:'array'});
      const ws=wb.Sheets[wb.SheetNames[0]];
      const rows=XLSX.utils.sheet_to_json(ws,{defval:''});
      function gc(row,...ns){for(const n of ns){const k=Object.keys(row).find(k=>k.trim().toLowerCase()===n.toLowerCase());if(k&&String(row[k]).trim())return String(row[k]).trim();}return '';}
      importRows=rows.map((row,i)=>{
        const fn=gc(row,'First Name','firstname','first name');
        const ln=gc(row,'Last Name','lastname','last name');
        const addr=gc(row,'Street Address','street address','Address','address');
        const zip=gc(row,'Zipcode','Zip Code','zip','ZIP','postal code');
        const phone=gc(row,'Phone Number','Phone','phone');
        const email=gc(row,'Email','email');
        // HubSpot Record ID — the contact's numeric ID
        const hubspotId=gc(row,'Record ID','record id','Contact ID','contact id','hs_object_id','Vid');
        const fullAddr=addr&&zip&&!addr.includes(zip)&&!/\d{5}/.test(addr)?addr+', '+zip:addr;
        return{_i:i,fn,ln,addr:fullAddr,rawAddr:addr,zip,phone,email,hubspotId};
      }).filter(r=>r.fn||r.ln);
      const hasIds=importRows.some(r=>r.hubspotId);
      document.getElementById('import-count').textContent=importRows.length+' contacts found'+(hasIds?' · HubSpot IDs detected ✓':'· ⚠ No Record ID column found — add it to your HubSpot export for payment sync');
      document.getElementById('import-preview').style.display='';
      document.getElementById('import-tbody').innerHTML=importRows.map(r=>`
        <tr>
          <td style="padding:6px 8px"><input type="checkbox" class="imp-cb" data-i="${r._i}" checked></td>
          <td style="padding:6px 8px;font-weight:500;white-space:nowrap">${r.fn} ${r.ln}</td>
          <td style="padding:6px 8px;font-size:12px;color:var(--ink3)">${r.addr||'—'}</td>
          <td style="padding:6px 8px;font-size:12px;color:var(--ink3)">${r.phone||'—'}</td>
          <td style="padding:6px 8px;font-size:12px;color:${r.hubspotId?'var(--green)':'var(--ink3)'}">${r.hubspotId||'—'}</td>
        </tr>`).join('');
    }catch(err){alert('Could not read file.');}
  };
  r.readAsArrayBuffer(file);
}
function togAllImport(v){document.querySelectorAll('.imp-cb').forEach(cb=>cb.checked=v);}
function selAllImport(){document.getElementById('imp-all-cb').checked=true;togAllImport(true);}
function deselAllImport(){document.getElementById('imp-all-cb').checked=false;togAllImport(false);}

// FIX: Rewrote doImport() — fixed mismatched braces, removed redundant if(!existing),
// moved added++ inside else block, closed forEach properly, alert is now outside forEach.
// Also added name+address fallback for duplicate detection when no phone number.
function doImport(){
  const sel=[...document.querySelectorAll('.imp-cb:checked')].map(cb=>parseInt(cb.dataset.i));
  if(!sel.length){alert('Select at least one.');return;}
  let added=0,updated=0;
  sel.forEach(i=>{
    const r=importRows.find(x=>x._i===i);
    if(!r)return;
    // FIX: match on phone OR (first+last name combo) to catch duplicates without phones
    const normPhone=s=>s.replace(/\D/g,'');
    const existing=DB.customers.find(c=>{
      if(r.phone&&c.phone&&normPhone(c.phone)===normPhone(r.phone))return true;
      if(!r.phone||!c.phone){
        // Fallback: match on full name (case-insensitive)
        const rName=(r.fn+' '+r.ln).trim().toLowerCase();
        const cName=custFullName(c).toLowerCase();
        if(rName&&rName===cName)return true;
      }
      return false;
    });
    if(existing){
      existing.first=r.fn||existing.first;
      existing.last=r.ln||existing.last;
      existing.addr=r.rawAddr||existing.addr;
      existing.zip=r.zip||existing.zip;
      existing.phone=r.phone||existing.phone;
      existing.email=r.email||existing.email;
      // Update HubSpot ID and auto-build contact URL if we have the ID
      if(r.hubspotId){
        existing.hubspotContactId=r.hubspotId;
        if(!existing.hubspotUrl)existing.hubspotUrl=`https://app.hubspot.com/contacts/${r.hubspotId}`;
      }
      updated++;
    } else {
      const hubspotUrl=r.hubspotId?`https://app.hubspot.com/contacts/${r.hubspotId}`:'';
      DB.customers.push({
        id:uid(),first:r.fn,last:r.ln,addr:r.rawAddr,zip:r.zip,
        phone:r.phone,email:r.email,sched:'weekly',day:'1',price:'',
        mowTime:45,size:'md',gate:'',notes:'',
        hubspotContactId:r.hubspotId||'',
        hubspotUrl,
        payMethod:'cash',payLink:'',serviceType:'mow',
        skipWeeks:[],resumeDate:null,pauseReason:''
      });
      added++;
    }
  });
  saveDB();
  closeModal('import-modal');
  renderCustomers();
  alert(`Imported: ${added} new, ${updated} updated.`);
}

// ══ CUSTOMER HISTORY PHOTOS ══════════════════════════════════════
function renderCustHistory(custId){
  const jobs=DB.jobHistory.filter(j=>j.custId===custId).sort((a,b)=>b.date.localeCompare(a.date));
  if(!jobs.length)return '';
  let h=`<div style="margin-top:.875rem;border-top:1px solid var(--s3);padding-top:.875rem">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--ink3);margin-bottom:.625rem">Job history (${jobs.length})</div>`;
  jobs.slice(0,8).forEach(j=>{
    // Prefer uploaded URLs over base64 blobs for display
    const beforeSrcs=(j.beforePhotoUrls&&j.beforePhotoUrls.length?j.beforePhotoUrls:j.beforePhotos)||[];
    const afterSrcs=(j.afterPhotoUrls&&j.afterPhotoUrls.length?j.afterPhotoUrls:j.afterPhotos)||[];
    const extraSrcs=(j.extraPhotoUrls&&j.extraPhotoUrls.length?j.extraPhotoUrls:j.extraPhotos)||[];
    const allPhotos=[...beforeSrcs,...afterSrcs,...extraSrcs].filter(Boolean);
    h+=`<div class="hist-job">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:${allPhotos.length?'.375rem':'0'}">
        <div>
          <span style="font-size:13px;font-weight:600">${fmtDate(j.date)}</span>
          <span style="font-size:11px;color:var(--ink3);margin-left:8px">${j.actualMin?j.actualMin+'m':j.estMin?j.estMin+'m est':''}</span>
        </div>
        <span class="tag ${j.paid?'tag-green':'tag-red'}">${j.paid?'Paid':'Unpaid'}</span>
      </div>
      ${allPhotos.length?`<div class="hist-photo-strip">${allPhotos.map(p=>`<img class="hist-thumb" src="${p}" onclick="openHistPhoto('${encodeURIComponent(p)}')" onerror="this.style.display='none'">`).join('')}</div>`:''}
      ${j.notes?`<div style="font-size:11px;color:var(--ink3);margin-top:3px">${j.notes}</div>`:''}
    </div>`;
  });
  h+='</div>';
  return h;
}

function openHistPhoto(encodedSrc){
  const src=decodeURIComponent(encodedSrc);
  document.getElementById('pv-img').src=src;
  document.getElementById('pv-lbl').textContent='Historical photo';
  pvJob=null;// mark as non-deletable history photo
  document.getElementById('pviewer').classList.add('open');
}

// ══ QUICK-ADD JOB ════════════════════════════════════════════════
function openQuickJobModal(){
  // Populate customer dropdown
  const sel=document.getElementById('qj-cust');
  sel.innerHTML='<option value="">— select customer —</option>'+
    DB.customers.filter(c=>c.sched!=='inactive').map(c=>`<option value="${c.id}">${custFullName(c)}</option>`).join('');
  document.getElementById('qj-date').value=todayStr();
  document.getElementById('qj-mins').value=45;
  document.getElementById('qj-price').value='';
  document.getElementById('qj-paid').value='unpaid';
  document.getElementById('qj-notes').value='';
  document.getElementById('quickjob-modal').classList.add('open');
}

function saveQuickJob(){
  const custId=document.getElementById('qj-cust').value;
  if(!custId){alert('Select a customer.');return;}
  const date=document.getElementById('qj-date').value||todayStr();
  const mins=parseInt(document.getElementById('qj-mins').value)||45;
  const paidVal=document.getElementById('qj-paid').value;
  const paid=paidVal!=='unpaid';
  const paidMethod=paid?paidVal:null;
  const notes=document.getElementById('qj-notes').value.trim();
  // Use customer's price if not overridden — store override in notes
  const priceOverride=document.getElementById('qj-price').value;
  const c=DB.customers.find(x=>x.id===custId);
  const rec={
    id:uid(),
    custId,
    date,
    actualMin:mins,
    estMin:parseInt(c&&c.mowTime||45),
    paid,
    paidMethod,
    beforePhotos:[],
    afterPhotos:[],
    extraPhotos:[],
    notes:notes+(priceOverride?` [price: $${priceOverride}]`:''),
    isOneOff:true
  };
  DB.jobHistory.push(rec);
  saveDB();
  closeModal('quickjob-modal');
  renderDash();
  alert(`Job logged for ${c?custFullName(c):'customer'} on ${fmtDate(date)}.`);
}

function loadHubSpotKeyUI(){
  const el=document.getElementById('hs-key');
  if(el&&DB.settings.hubspotKey)el.value=DB.settings.hubspotKey;
}

// ══ CARD SETUP LINK ══════════════════════════════════════════════
async function sendCardSetupLink(custId){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c){alert('Customer not found.');return;}
  if(!c.phone&&!c.email){alert('No phone or email on file for this customer.');return;}

  try{
    const res=await fetch('https://effervescent-pie-af6453.netlify.app/.netlify/functions/setup',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        stripeCustomerId:c.stripeCustomerId||null,
        customerName:custFullName(c),
        customerEmail:c.email||''
      })
    });
    const data=await res.json();
    if(!data.success){alert('Error: '+data.error);return;}

    // Save Stripe customer ID if it was just created
    if(data.stripeCustomerId&&!c.stripeCustomerId){
      c.stripeCustomerId=data.stripeCustomerId;
      saveDB();
    }

    const setupUrl=data.setupUrl;
    const settings=getStripeSettings();
    const bizName=settings.bizName||'Richardson Outdoor Solutions';
    const msg=`Hi ${c.first}! Please save your card on file for future lawn service payments. It only takes a minute: ${setupUrl} — Thanks, ${bizName}`;

    // Send via SMS or email
    if(c.phone){
      window.open('sms:'+c.phone.replace(/\D/g,'')+'?body='+encodeURIComponent(msg));
    } else if(c.email){
      window.open('mailto:'+c.email+'?subject=Save your card — '+bizName+'&body='+encodeURIComponent(msg));
    }
  }catch(e){
    alert('Connection error. Check internet and try again.');
  }
}

// ── HUBSPOT SYNC ─────
async function syncPaymentToHubSpot(custId,amount,method,jobDate){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c||!c.hubspotContactId)return;
  const hsKey=DB.settings.hubspotKey||'';
  if(!hsKey)return;
  try{
    // Update contact properties with last payment info
    // Uses crm.objects.contacts.write scope (available on Starter)
    await fetch(`https://api.hubapi.com/crm/v3/objects/contacts/${c.hubspotContactId}`,{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json',
        'Authorization':'Bearer '+hsKey
      },
      body:JSON.stringify({
        properties:{
          hs_lead_status:'Connected',
          notes_last_contacted:new Date(jobDate).getTime().toString(),
          // Store payment info in the contact's "about" notes field
          // since custom properties require Sales Hub
          hs_content_membership_notes:`Last payment: $${parseFloat(amount).toFixed(2)} via ${method==='cash'?'Cash/Check':method} on ${jobDate}`
        }
      })
    });
  }catch(e){console.log('HubSpot sync error',e);}
}

// ══ PAUSE / RESUME / SKIP ════════════════════════════════════════
function pauseCust(id){
  const c=DB.customers.find(x=>x.id===id);
  if(!c)return;
  const resumeDate=prompt('Resume date (YYYY-MM-DD) — leave blank for indefinite pause:','');
  const reason=prompt('Reason (optional):','');
  c.sched='paused';
  c.resumeDate=resumeDate||null;
  c.pauseReason=reason||'';
  saveDB();renderCustomers();
}

function resumeCust(id){
  const c=DB.customers.find(x=>x.id===id);
  if(!c)return;
  c.sched='weekly'; // restore to weekly — they can change if needed
  c.resumeDate=null;
  c.pauseReason='';
  saveDB();renderCustomers();
  alert(custFullName(c)+' resumed on weekly schedule.');
}

function skipNextWeek(id){
  const c=DB.customers.find(x=>x.id===id);
  if(!c)return;
  // Find their next scheduled date
  const today=new Date();today.setHours(0,0,0,0);
  let next=null;
  for(let i=1;i<=14;i++){
    const d=new Date(today);d.setDate(today.getDate()+i);
    if(isDueOnDate(c,d)){next=d;break;}
  }
  if(!next){alert('No upcoming visit found in the next 2 weeks.');return;}
  const dateStr=next.toISOString().slice(0,10);
  if(!c.skipWeeks)c.skipWeeks=[];
  if(c.skipWeeks.includes(dateStr)){
    alert('Already skipping '+fmtDate(dateStr)+'.');return;
  }
  if(!confirm('Skip '+custFullName(c)+'\'s visit on '+fmtDate(dateStr)+'?'))return;
  c.skipWeeks.push(dateStr);
  // Keep only future skips (clean up old ones)
  c.skipWeeks=c.skipWeeks.filter(d=>d>=todayStr());
  saveDB();renderCustomers();renderDash();
  alert('Visit on '+fmtDate(dateStr)+' skipped.');
}

// ══ ON MY WAY TEXT ════════════════════════════════════════════════
function sendOnMyWay(custId){
  const c=DB.customers.find(x=>x.id===custId);
  if(!c||!c.phone){alert('No phone number for this customer.');return;}
  const settings=getStripeSettings();
  const bizName=settings.bizName||'Richardson Outdoor Solutions';
  const msg=`Hi ${c.first}! I'm on my way for your lawn service today. See you soon! — ${bizName}`;
  window.open('sms:'+c.phone.replace(/\D/g,'')+'?body='+encodeURIComponent(msg));
}

// Also add on-my-way button to field tracker job card navigate section
function sendOnMyWayFromTracker(custId){
  sendOnMyWay(custId);
}

// ══ DEDUPLICATE ═══════════════════════════════════════════════════
async function runDedup(){
  const resultEl=document.getElementById('dedup-result');
  resultEl.style.display='';
  resultEl.style.background='var(--s2)';
  resultEl.style.border='1px solid var(--bd)';
  resultEl.style.color='var(--ink2)';
  resultEl.innerHTML='<span class="spin"></span> Scanning for duplicates...';

  const normPhone=s=>(s||'').replace(/\D/g,'');
  const normName=c=>custFullName(c).trim().toLowerCase();

  // Build groups of duplicates
  const seen=new Map(); // key -> first customer index
  const mergeOps=[]; // {keep, discard}

  DB.customers.forEach((c,i)=>{
    // Keys to try: phone first, then name
    const phoneKey=normPhone(c.phone);
    const nameKey=normName(c);
    let masterKey=null;
    if(phoneKey&&phoneKey.length>=7){
      if(seen.has('ph:'+phoneKey)){masterKey='ph:'+phoneKey;}
      else{seen.set('ph:'+phoneKey,i);}
    }
    if(!masterKey&&nameKey){
      if(seen.has('nm:'+nameKey)){masterKey='nm:'+nameKey;}
      else{if(!phoneKey||phoneKey.length<7)seen.set('nm:'+nameKey,i);}
    }
    if(masterKey!==null){
      const masterIdx=seen.get(masterKey);
      mergeOps.push({keepIdx:masterIdx,discardIdx:i});
    }
  });

  if(!mergeOps.length){
    resultEl.innerHTML='<span style="color:var(--green);font-weight:600">✓ No duplicates found!</span> All '+DB.customers.length+' customers look unique.';
    return;
  }

  // Show preview first
  let preview='<div style="font-weight:600;margin-bottom:.625rem;color:var(--ink)">Found '+mergeOps.length+' duplicate'+(mergeOps.length>1?'s':'')+' to merge:</div>';
  mergeOps.forEach(op=>{
    const keep=DB.customers[op.keepIdx];
    const discard=DB.customers[op.discardIdx];
    preview+=`<div style="background:var(--s);border:1px solid var(--bd);border-radius:8px;padding:.625rem .875rem;margin-bottom:.5rem;font-size:12px">
      <div style="color:var(--green);font-weight:700">KEEP: ${custFullName(keep)} · ${custAddr(keep)||'no address'} · ${keep.phone||'no phone'}</div>
      <div style="color:var(--red);font-weight:700;margin-top:2px">REMOVE: ${custFullName(discard)} · ${custAddr(discard)||'no address'} · ${discard.phone||'no phone'}</div>
      <div style="color:var(--ink3);margin-top:3px">Merges: addr, phone, email from the more complete record</div>
    </div>`;
  });
  preview+=`<div style="display:flex;gap:8px;margin-top:.75rem">
    <button class="btn btng bsm" style="flex:1" onclick="confirmDedup()"><i class="ti ti-check"></i> Merge & delete duplicates</button>
    <button class="btn bsm btnr" onclick="document.getElementById('dedup-result').style.display='none'">Cancel</button>
  </div>`;
  resultEl.innerHTML=preview;
  // Store ops for confirmDedup
  window._pendingDedupOps=mergeOps;
}

async function confirmDedup(){
  const resultEl=document.getElementById('dedup-result');
  const ops=window._pendingDedupOps||[];
  if(!ops.length)return;
  resultEl.innerHTML='<span class="spin"></span> Merging and syncing...';

  // Collect IDs to delete
  const toDeleteIds=new Set();
  ops.forEach(op=>{
    const keep=DB.customers[op.keepIdx];
    const discard=DB.customers[op.discardIdx];
    if(!keep||!discard)return;
    // Merge: fill in blanks on keep record from discard
    if(!keep.addr&&discard.addr)keep.addr=discard.addr;
    if(!keep.zip&&discard.zip)keep.zip=discard.zip;
    if(!keep.phone&&discard.phone)keep.phone=discard.phone;
    if(!keep.email&&discard.email)keep.email=discard.email;
    if(!keep.price&&discard.price)keep.price=discard.price;
    if(!keep.gate&&discard.gate)keep.gate=discard.gate;
    if(!keep.notes&&discard.notes)keep.notes=discard.notes;
    // Repoint job history from discard -> keep
    DB.jobHistory.forEach(j=>{if(j.custId===discard.id)j.custId=keep.id;});
    toDeleteIds.add(discard.id);
  });

  // Remove discarded customers locally
  DB.customers=DB.customers.filter(c=>!toDeleteIds.has(c.id));
  await saveDB();

  // Delete from Supabase
  let supaErrors=0;
  for(const id of toDeleteIds){
    try{
      const {error}=await supabaseClient.from('customers').delete().eq('id',id);
      if(error)supaErrors++;
    }catch(e){supaErrors++;}
  }

  renderCustomers();
  renderDash();
  const msg=`✓ Merged ${ops.length} duplicate${ops.length>1?'s':''} — ${toDeleteIds.size} record${toDeleteIds.size>1?'s':''} removed.`+(supaErrors>0?` (${supaErrors} Supabase delete error${supaErrors>1?'s':''})`:'');
  resultEl.style.background='var(--gp)';
  resultEl.style.border='1px solid var(--gl)';
  resultEl.style.color='var(--green)';
  resultEl.innerHTML='<strong>'+msg+'</strong>';
  window._pendingDedupOps=[];
}

// ══ REPORTS ═══════════════════════════════════════════════════════
function renderReports(){
  const period=document.getElementById('report-period').value;
  const now=new Date();
  let filtered=DB.jobHistory;
  if(period==='week'){const monday=new Date(now);monday.setDate(now.getDate()-(now.getDay()||7)+1);monday.setHours(0,0,0,0);filtered=filtered.filter(j=>new Date(j.date)>=monday);}
  if(period==='month'){const start=new Date(now.getFullYear(),now.getMonth(),1);filtered=filtered.filter(j=>new Date(j.date)>=start);}
  const totalJobs=filtered.length;
  const paidJobs=filtered.filter(j=>j.paid).length;
  const revenue=filtered.filter(j=>j.paid).reduce((a,j)=>{const c=DB.customers.find(x=>x.id===j.custId);return a+parseFloat(c&&c.price||0);},0);
  const unpaidRevenue=filtered.filter(j=>!j.paid).reduce((a,j)=>{const c=DB.customers.find(x=>x.id===j.custId);return a+parseFloat(c&&c.price||0);},0);
  const avgActual=filtered.filter(j=>j.actualMin>0).reduce((a,j,_,arr)=>a+j.actualMin/arr.length,0);

  // Mileage log: sum from stored route payloads per day
  const mileageLog=[];
  try{
    const raw=localStorage.getItem('ros_mileage_log');
    if(raw){const parsed=JSON.parse(raw);mileageLog.push(...parsed);}
  }catch(e){}
  const totalMiles=mileageLog.reduce((a,e)=>a+e.miles,0);

  document.getElementById('report-content').innerHTML=`
    <div class="dash-grid">
      <div class="dash-card"><div class="dash-val">${totalJobs}</div><div class="dash-lbl">Jobs completed</div></div>
      <div class="dash-card"><div class="dash-val" style="color:var(--green)">$${revenue.toFixed(0)}</div><div class="dash-lbl">Revenue collected</div></div>
      <div class="dash-card"><div class="dash-val" style="color:var(--red)">$${unpaidRevenue.toFixed(0)}</div><div class="dash-lbl">Outstanding</div></div>
      <div class="dash-card"><div class="dash-val">${avgActual>0?Math.round(avgActual)+'m':'—'}</div><div class="dash-lbl">Avg job time</div></div>
    </div>
    <div class="card">
      <div class="card-title">Mileage log</div>
      <div class="mile-badge"><i class="ti ti-car" style="font-size:15px"></i> ${totalMiles.toFixed(1)} total miles logged</div>
      ${mileageLog.length?mileageLog.slice(-10).reverse().map(e=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:.5rem 0;border-bottom:1px solid var(--s3);font-size:13px">
          <span>${fmtDate(e.date)}</span>
          <span style="font-weight:600;color:var(--blue)">${e.miles.toFixed(1)} mi · ${e.stops} stop${e.stops!==1?'s':''}</span>
        </div>`).join(''):'<div style="color:var(--ink3);font-size:13px;padding:.5rem 0">Miles are logged automatically when you send a route to the tracker.</div>'}
    </div>
    <div class="card">
      <div class="card-title">Customer breakdown</div>
      ${DB.customers.filter(c=>c.sched!=='inactive').map(c=>{
        const cJobs=filtered.filter(j=>j.custId===c.id);
        const cPaid=cJobs.filter(j=>j.paid).length;
        const cRev=cPaid*parseFloat(c.price||0);
        const avgTime=cJobs.filter(j=>j.actualMin>0).reduce((a,j,_,arr)=>a+j.actualMin/arr.length,0);
        return `<div style="display:flex;align-items:center;gap:10px;padding:.625rem 0;border-bottom:1px solid var(--s3)">
          <div style="width:32px;height:32px;border-radius:50%;background:var(--green);color:#fff;display:flex;align-items:center;justify-content:center;font-family:'Bebas Neue',sans-serif;font-size:15px;flex-shrink:0">${initials(c)}</div>
          <div style="flex:1;min-width:0"><div style="font-weight:600;font-size:13px">${custFullName(c)}</div><div style="font-size:11px;color:var(--ink3)">${cJobs.length} job${cJobs.length!==1?'s':''} · ${avgTime>0?Math.round(avgTime)+'m avg':fmtMins(c.mowTime)+' est'}</div></div>
          <div style="text-align:right;flex-shrink:0"><div style="font-weight:600;font-size:13px;color:var(--green)">$${cRev.toFixed(0)}</div><div style="font-size:10px;color:var(--ink3)">${cPaid} paid</div></div>
        </div>`;
      }).join('')||'<div style="color:var(--ink3);font-size:13px;text-align:center;padding:1rem">No data yet</div>'}
    </div>`;
}

function openReportModal(){
  document.getElementById('report-modal-content').innerHTML=document.getElementById('report-content').innerHTML||'<p style="color:var(--ink3)">No data yet.</p>';
  document.getElementById('report-modal').classList.add('open');
}

// ══ MODAL UTILS ═══════════════════════════════════════════════════
function closeModal(id){document.getElementById(id).classList.remove('open');}
function handleModalBg(e,id){if(e.target===document.getElementById(id))closeModal(id);}

// ══ BACKUP & RESTORE ═════════════════════════════════════════════
function updateBackupStats(){
  const el=document.getElementById('backup-stats');
  const lbl=document.getElementById('last-backup-lbl');
  if(!el)return;
  el.innerHTML=`<strong>${DB.customers.length}</strong> customers · <strong>${DB.jobHistory.length}</strong> jobs recorded`;
  const lastBackup=localStorage.getItem('ros_last_backup');
  if(lastBackup){
    lbl.textContent='Last backup: '+new Date(lastBackup).toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric',hour:'numeric',minute:'2-digit'});
  } else {
    lbl.textContent='No backup made yet';
    lbl.style.color='var(--red)';
  }
}

function backupData(){
  const payload={
    version:2,
    exportedAt:new Date().toISOString(),
    db:DB
  };
  const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});
  const a=document.createElement('a');
  a.href=URL.createObjectURL(blob);
  a.download='ROS-Backup-'+new Date().toISOString().slice(0,10)+'.json';
  a.click();
  localStorage.setItem('ros_last_backup',new Date().toISOString());
  updateBackupStats();
  showRestoreMsg('Backup downloaded! Save it to Google Drive or your files.','var(--gp)','var(--green)');
}

function restoreData(input){
  const file=input.files[0];
  if(!file)return;
  const reader=new FileReader();
  reader.onload=function(e){
    try{
      const payload=JSON.parse(e.target.result);
      if(!payload.db||!payload.db.customers){
        showRestoreMsg('Invalid backup file. Make sure you selected a ROS backup.','var(--rp)','var(--red)');
        return;
      }
      if(!confirm('Restore this backup? This will replace all current data.\n\nBackup date: '+new Date(payload.exportedAt).toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})+'\nCustomers: '+payload.db.customers.length+'\nJobs: '+payload.db.jobHistory.length)){
        input.value='';return;
      }
      DB=Object.assign({customers:[],jobHistory:[],settings:{mapsKey:'',homeBase:'',startTime:'07:00',hours:8}},payload.db);
      saveDB();
      if(DB.settings.homeBase)document.getElementById('plan-home').value=DB.settings.homeBase;
      if(DB.settings.startTime)document.getElementById('plan-start').value=DB.settings.startTime;
      if(DB.settings.hours)document.getElementById('plan-hours').value=DB.settings.hours;
      if(DB.settings.mapsKey)document.getElementById('maps-key').value=DB.settings.mapsKey;
      renderDash();renderCustomers();renderReports();
      showRestoreMsg('✓ Restored successfully! '+DB.customers.length+' customers and '+DB.jobHistory.length+' jobs loaded.','var(--gp)','var(--green)');
      input.value='';
    }catch(err){
      showRestoreMsg('Could not read that file. Make sure it\'s a valid ROS backup.','var(--rp)','var(--red)');
    }
  };
  reader.readAsText(file);
}

function showRestoreMsg(msg,bg,color){
  const el=document.getElementById('restore-msg');
  if(!el)return;
  el.textContent=msg;
  el.style.background=bg;
  el.style.color=color;
  el.style.display='';
  el.style.border='1px solid '+color;
  setTimeout(()=>{el.style.display='none';},5000);
}

// ══ INIT ══════════════════════════════════════════════════════════
(async function initApp(){
  await loadDB();

  if(DB.settings.homeBase)document.getElementById('plan-home').value=DB.settings.homeBase;
  if(DB.settings.startTime)document.getElementById('plan-start').value=DB.settings.startTime;
  if(DB.settings.hours)document.getElementById('plan-hours').value=DB.settings.hours;
  if(DB.settings.mapsKey)document.getElementById('maps-key').value=DB.settings.mapsKey;

  // FIX: also wire up maps-key to persist when changed
  ['plan-home','plan-start','plan-hours','maps-key'].forEach(id=>{
    document.getElementById(id).addEventListener('change',()=>{
      DB.settings.homeBase=document.getElementById('plan-home').value;
      DB.settings.startTime=document.getElementById('plan-start').value;
      DB.settings.hours=parseFloat(document.getElementById('plan-hours').value)||8;
      DB.settings.mapsKey=document.getElementById('maps-key').value;
      saveDB();
    });
  });

  document.getElementById('dash-date').textContent=new Date().toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'});
  tryAutoLoadTracker();
  renderDash();
  renderCustomers();
  renderReports();
  updateBackupStats();
  loadStripeSettingsUI();
  loadHubSpotKeyUI();
})();
// ══ PWA SERVICE WORKER ═══════════════════════════════════════════
// Only register if browser supports it properly (not blob URL approach)
if('serviceWorker' in navigator && location.protocol === 'https:'){
  // Write SW to a real path - only works when hosted, not local file
  navigator.serviceWorker.getRegistrations().then(regs=>{
    // Clean up any old broken registrations
    regs.forEach(r=>r.unregister());
  }).catch(()=>{});
}

// PWA install prompt
let deferredInstallPrompt=null;
window.addEventListener('beforeinstallprompt',e=>{
  e.preventDefault();
  deferredInstallPrompt=e;
  setTimeout(()=>{
    if(deferredInstallPrompt&&!window.matchMedia('(display-mode: standalone)').matches){
      showInstallBanner();
    }
  },3000);
});

function showInstallBanner(){
  if(document.getElementById('pwa-banner'))return;
  const banner=document.createElement('div');
  banner.id='pwa-banner';
  banner.style.cssText='position:fixed;bottom:70px;left:50%;transform:translateX(-50%);width:calc(100% - 2rem);max-width:560px;background:var(--green);color:#fff;border-radius:var(--rl);padding:.875rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:12px;z-index:100;box-shadow:0 4px 20px rgba(0,0,0,.25)';
  banner.innerHTML=`
    <div style="display:flex;align-items:center;gap:10px">
      <span style="font-size:24px">🌿</span>
      <div>
        <div style="font-weight:700;font-size:14px">Install ROS App</div>
        <div style="font-size:12px;opacity:.8">Add to home screen for fast access</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;flex-shrink:0">
      <button onclick="installPWA()" style="background:#fff;color:var(--green);border:none;border-radius:8px;padding:6px 14px;font-weight:700;font-size:13px;cursor:pointer;font-family:'DM Sans',sans-serif">Install</button>
      <button onclick="document.getElementById('pwa-banner').remove()" style="background:rgba(255,255,255,.2);color:#fff;border:none;border-radius:8px;padding:6px 10px;font-weight:700;font-size:13px;cursor:pointer">✕</button>
    </div>`;
  document.body.appendChild(banner);
}

async function installPWA(){
  if(!deferredInstallPrompt)return;
  deferredInstallPrompt.prompt();
  const result=await deferredInstallPrompt.userChoice;
  deferredInstallPrompt=null;
  const banner=document.getElementById('pwa-banner');
  if(banner)banner.remove();
}

// iOS install instructions
window.addEventListener('load',()=>{
  const isIOS=/iphone|ipad|ipod/i.test(navigator.userAgent);
  const isStandalone=window.matchMedia('(display-mode: standalone)').matches||window.navigator.standalone;
  if(isIOS&&!isStandalone&&!localStorage.getItem('ros_ios_hint')){
    setTimeout(()=>{
      const banner=document.createElement('div');
      banner.style.cssText='position:fixed;bottom:70px;left:50%;transform:translateX(-50%);width:calc(100% - 2rem);max-width:560px;background:var(--green);color:#fff;border-radius:var(--rl);padding:.875rem 1rem;z-index:100;box-shadow:0 4px 20px rgba(0,0,0,.25)';
      banner.innerHTML=`<div style="display:flex;align-items:flex-start;justify-content:space-between;gap:10px"><div><div style="font-weight:700;font-size:14px;margin-bottom:4px">🌿 Install ROS App</div><div style="font-size:12px;opacity:.9;line-height:1.5">Tap <strong>Share</strong> ⎙ then <strong>"Add to Home Screen"</strong></div></div><button onclick="localStorage.setItem('ros_ios_hint','1');this.closest('div[style]').remove()" style="background:rgba(255,255,255,.2);color:#fff;border:none;border-radius:8px;padding:6px 10px;font-weight:700;font-size:13px;cursor:pointer;flex-shrink:0">✕</button></div>`;
      document.body.appendChild(banner);
    },3000);
  }
});
</script>
</body>
</html>
