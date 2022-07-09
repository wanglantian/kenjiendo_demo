/*!
 * VERSION: 1.13.1
 * DATE: 2014-07-19
 * UPDATES AND DOCS AT: http://www.greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, s) {
                        i.call(this, t, e, s), this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = r.prototype.render
                    },
                    n = 1e-10,
                    a = i._internals,
                    o = a.isSelector,
                    h = a.isArray,
                    l = r.prototype = i.to({}, .1, {}),
                    _ = [];
                r.version = "1.13.1", l.constructor = r, l.kill()._gc = !1, r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf, r.getTweensOf = i.getTweensOf, r.lagSmoothing = i.lagSmoothing, r.ticker = i.ticker, r.render = i.render, l.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
                }, l.updateTo = function(t, e) {
                    var s, r = this.ratio;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (s in t) this.vars[s] = t[s];
                    if (this._initted)
                        if (e) this._initted = !1;
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var n = this._time;
                        this.render(0, !0, !1), this._initted = !1, this.render(n, !0, !1)
                    } else if (this._time > 0) {
                        this._initted = !1, this._init();
                        for (var a, o = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= o, h.s = a - h.c, h = h._next
                    }
                    return this
                }, l.render = function(t, e, i) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, r, o, h, l, u, p, c, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._cycle,
                        v = this._duration,
                        y = this._rawPrevTime;
                    if (t >= f ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, r = "onComplete"), 0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > y || y === n) && y !== t && (i = !0, y > n && (r = "onReverseComplete")), this._rawPrevTime = c = !e || t || y === t ? t : n)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== d || 0 === v && y > 0 && y !== n) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0), this._rawPrevTime = c = !e || t || y === t ? t : n)) : this._initted || (i = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 !== (1 & this._cycle) && (this._time = v - this._time), this._time > v ? this._time = v : 0 > this._time && (this._time = 0)), this._easeType ? (l = this._time / v, u = this._easeType, p = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === p ? l *= l : 2 === p ? l *= l * l : 3 === p ? l *= l * l * l : 4 === p && (l *= l * l * l * l), this.ratio = 1 === u ? 1 - l : 2 === u ? l : .5 > this._time / v ? l / 2 : 1 - l / 2) : this.ratio = this._ease.getRatio(this._time / v)), m === this._time && !i && g === this._cycle) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), void 0;
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = d, this._rawPrevTime = y, this._cycle = g, a.lazyTweens.push(this), this._lazy = t, void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / v) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === d && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === v) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._totalTime !== d || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _)), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || _)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || _), 0 === v && this._rawPrevTime === n && c !== n && (this._rawPrevTime = 0))
                }, r.to = function(t, e, i) {
                    return new r(t, e, i)
                }, r.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new r(t, e, i)
                }, r.fromTo = function(t, e, i, s) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new r(t, e, s)
                }, r.staggerTo = r.allTo = function(t, e, n, a, l, u, p) {
                    a = a || 0;
                    var c, f, m, d, g = n.delay || 0,
                        v = [],
                        y = function() {
                            n.onComplete && n.onComplete.apply(n.onCompleteScope || this, arguments), l.apply(p || this, u || _)
                        };
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t))), c = t.length, m = 0; c > m; m++) {
                        f = {};
                        for (d in n) f[d] = n[d];
                        f.delay = g, m === c - 1 && l && (f.onComplete = y), v[m] = new r(t[m], e, f), g += a
                    }
                    return v
                }, r.staggerFrom = r.allFrom = function(t, e, i, s, n, a, o) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, r.staggerTo(t, e, i, s, n, a, o)
                }, r.staggerFromTo = r.allFromTo = function(t, e, i, s, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, r.staggerTo(t, e, s, n, a, o, h)
                }, r.delayedCall = function(t, e, i, s, n) {
                    return new r(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        onCompleteScope: s,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        onReverseCompleteScope: s,
                        immediateRender: !1,
                        useFrames: n,
                        overwrite: 0
                    })
                }, r.set = function(t, e) {
                    return new r(t, 0, e)
                }, r.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var u = function(t, e) {
                        for (var s = [], r = 0, n = t._first; n;) n instanceof i ? s[r++] = n : (e && (s[r++] = n), s = s.concat(u(n, e)), r = s.length), n = n._next;
                        return s
                    },
                    p = r.getAllTweens = function(e) {
                        return u(t._rootTimeline, e).concat(u(t._rootFramesTimeline, e))
                    };
                r.killAll = function(t, i, s, r) {
                    null == i && (i = !0), null == s && (s = !0);
                    var n, a, o, h = p(0 != r),
                        l = h.length,
                        _ = i && s && r;
                    for (o = 0; l > o; o++) a = h[o], (_ || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }, r.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var n, l, _, u, p, c = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = s(t)), h(t))
                            for (u = t.length; --u > -1;) r.killChildTweensOf(t[u], e);
                        else {
                            n = [];
                            for (_ in c)
                                for (l = c[_].target.parentNode; l;) l === t && (n = n.concat(c[_].tweens)), l = l.parentNode;
                            for (p = n.length, u = 0; p > u; u++) e && n[u].totalTime(n[u].totalDuration()), n[u]._enabled(!1, !1)
                        }
                    }
                };
                var c = function(t, i, s, r) {
                    i = i !== !1, s = s !== !1, r = r !== !1;
                    for (var n, a, o = p(r), h = i && s && r, l = o.length; --l > -1;) a = o[l], (h || a instanceof e || (n = a.target === a.vars.onComplete) && s || i && !n) && a.paused(t)
                };
                return r.pauseAll = function(t, e, i) {
                    c(!0, t, e, i)
                }, r.resumeAll = function(t, e, i) {
                    c(!1, t, e, i)
                }, r.globalTimeScale = function(e) {
                    var s = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || n, s._startTime = r - (r - s._startTime) * s._timeScale / e, s = t._rootFramesTimeline, r = i.ticker.frame, s._startTime = r - (r - s._startTime) * s._timeScale / e, s._timeScale = t._rootTimeline._timeScale = e, e) : s._timeScale
                }, l.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, l.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, l.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, l.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, l.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, l.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, l.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, l.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, r
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var s = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = this.vars.autoRemoveChildren === !0, this.smoothChildTiming = this.vars.smoothChildTiming === !0, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, s, r = this.vars;
                        for (s in r) i = r[s], o(i) && -1 !== i.join("").indexOf("{self}") && (r[s] = this._swapSelfInParams(i));
                        o(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = 1e-10,
                    n = i._internals,
                    a = n.isSelector,
                    o = n.isArray,
                    h = n.lazyTweens,
                    l = n.lazyRender,
                    _ = [],
                    u = _gsScope._gsDefine.globals,
                    p = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    c = function(t, e, i, s) {
                        t._timeline.pause(t._startTime), e && e.apply(s || t._timeline, i || _)
                    },
                    f = function(t) {
                        var e, i = [],
                            s = t.length;
                        for (e = 0; e !== s; i.push(t[e++]));
                        return i
                    },
                    m = s.prototype = new e;
                return s.version = "1.13.1", m.constructor = s, m.kill()._gc = !1, m.to = function(t, e, s, r) {
                    var n = s.repeat && u.TweenMax || i;
                    return e ? this.add(new n(t, e, s), r) : this.set(t, s, r)
                }, m.from = function(t, e, s, r) {
                    return this.add((s.repeat && u.TweenMax || i).from(t, e, s), r)
                }, m.fromTo = function(t, e, s, r, n) {
                    var a = r.repeat && u.TweenMax || i;
                    return e ? this.add(a.fromTo(t, e, s, r), n) : this.set(t, r, n)
                }, m.staggerTo = function(t, e, r, n, o, h, l, _) {
                    var u, c = new s({
                        onComplete: h,
                        onCompleteParams: l,
                        onCompleteScope: _,
                        smoothChildTiming: this.smoothChildTiming
                    });
                    for ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = f(t)), n = n || 0, u = 0; t.length > u; u++) r.startAt && (r.startAt = p(r.startAt)), c.to(t[u], e, p(r), u * n);
                    return this.add(c, o)
                }, m.staggerFrom = function(t, e, i, s, r, n, a, o) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, s, r, n, a, o)
                }, m.staggerFromTo = function(t, e, i, s, r, n, a, o, h) {
                    return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, s, r, n, a, o, h)
                }, m.call = function(t, e, s, r) {
                    return this.add(i.delayedCall(0, t, e, s), r)
                }, m.set = function(t, e, s) {
                    return s = this._parseTimeOrLabel(s, 0, !0), null == e.immediateRender && (e.immediateRender = s === this._time && !this._paused), this.add(new i(t, 0, e), s)
                }, s.exportRoot = function(t, e) {
                    t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, n, a = new s(t),
                        o = a._timeline;
                    for (null == e && (e = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) n = r._next, e && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = n;
                    return o.add(a, 0), a
                }, m.add = function(r, n, a, h) {
                    var l, _, u, p, c, f;
                    if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && o(r)) {
                            for (a = a || "normal", h = h || 0, l = n, _ = r.length, u = 0; _ > u; u++) o(p = r[u]) && (p = new s({
                                tweens: p
                            })), this.add(p, l), "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())), l += h;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, n);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, n), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (c = this, f = c.rawTime() > r._startTime; c._timeline;) f && c._timeline.smoothChildTiming ? c.totalTime(c._totalTime, !0) : c._gc && c._enabled(!0, !1), c = c._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) return this._remove(e, !1);
                    if (e instanceof Array || e && e.push && o(e)) {
                        for (var i = e.length; --i > -1;) this.remove(e[i]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    var s = this._last;
                    return s ? this._time > s._startTime + s._totalDuration / s._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, s) {
                    return this.add(t, e || 0, i, s)
                }, m.appendMultiple = function(t, e, i, s) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, s)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, i, s) {
                    return this.call(c, ["{self}", e, i, s], this, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, s, r) {
                    var n;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && o(r)))
                        for (n = r.length; --n > -1;) r[n] instanceof t && r[n].timeline === this && this.remove(r[n]);
                    if ("string" == typeof i) return this._parseTimeOrLabel(i, s && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, s);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = this.duration());
                    else {
                        if (n = e.indexOf("="), -1 === n) return null == this._labels[e] ? s ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(n - 1) + "1", 10) * Number(e.substr(n + 1)), e = n > 1 ? this._parseTimeOrLabel(e.substr(0, n - 1), 0, s) : this.duration()
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, n, a, o, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        c = this._time,
                        f = this._startTime,
                        m = this._timeScale,
                        d = this._paused;
                    if (t >= p ? (this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (n = !0, o = "onComplete", 0 === this._duration && (0 === t || 0 > this._rawPrevTime || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (u = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = p + 1e-4) : 1e-7 > t ? (this._totalTime = this._time = 0, (0 !== c || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", n = this._reversed), 0 > t ? (this._active = !1, this._rawPrevTime >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : this._totalTime = this._time = this._rawPrevTime = t, this._time !== c && this._first || i || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== c && t > 0 && (this._active = !0), 0 === c && this.vars.onStart && 0 !== this._time && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || _)), this._time >= c)
                            for (s = this._first; s && (a = s._next, !this._paused || d);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        else
                            for (s = this._last; s && (a = s._prev, !this._paused || d);)(s._active || c >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = a;
                        this._onUpdate && (e || (h.length && l(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || _))), o && (this._gc || (f === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (n && (h.length && l(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this.vars[o].apply(this.vars[o + "Scope"] || this, this.vars[o + "Params"] || _)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof s && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, s, r) {
                    r = r || -9999999999;
                    for (var n = [], a = this._first, o = 0; a;) r > a._startTime || (a instanceof i ? e !== !1 && (n[o++] = a) : (s !== !1 && (n[o++] = a), t !== !1 && (n = n.concat(a.getChildren(!0, e, s)), o = n.length))), a = a._next;
                    return n
                }, m.getTweensOf = function(t, e) {
                    var s, r, n = this._gc,
                        a = [],
                        o = 0;
                    for (n && this._enabled(!0, !0), s = i.getTweensOf(t), r = s.length; --r > -1;)(s[r].timeline === this || e && this._contains(s[r])) && (a[o++] = s[r]);
                    return n && this._enabled(!1, !0), a
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var s, r = this._first, n = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (s in n) n[s] >= i && (n[s] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), s = i.length, r = !1; --s > -1;) i[s]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return t !== !1 && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var t = this._first; t;) t.invalidate(), t = t._next;
                    return this
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var s = this._first; s;) s._enabled(t, !0), s = s._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, s = 0, r = this._last, n = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > n && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : n = r._startTime, 0 > r._startTime && !r._paused && (s -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), n = 0), i = r._startTime + r._totalDuration / r._timeScale, i > s && (s = i), r = e;
                            this._duration = this._totalDuration = s, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return 0 !== this.totalDuration() && 0 !== t && this.timeScale(this._totalDuration / t), this
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function() {
                    return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                }, s
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var s = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = this.vars.yoyo === !0, this._dirty = !0
                    },
                    r = 1e-10,
                    n = [],
                    a = e._internals,
                    o = a.lazyTweens,
                    h = a.lazyRender,
                    l = new i(null, null, 1, 0),
                    _ = s.prototype = new t;
                return _.constructor = s, _.kill()._gc = !1, s.version = "1.13.1", _.invalidate = function() {
                    return this._yoyo = this.vars.yoyo === !0, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, _.addCallback = function(t, i, s, r) {
                    return this.add(e.delayedCall(0, t, s, r), i)
                }, _.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), s = i.length, r = this._parseTimeOrLabel(e); --s > -1;) i[s]._startTime === r && i[s]._enabled(!1, !1);
                    return this
                }, _.tweenTo = function(t, i) {
                    i = i || {};
                    var s, r, a, o = {
                        ease: l,
                        overwrite: i.delay ? 2 : 1,
                        useFrames: this.usesFrames(),
                        immediateRender: !1
                    };
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), s = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, a = new e(this, s, o), o.onStart = function() {
                        a.target.paused(!0), a.vars.time !== a.target.time() && s === a.duration() && a.duration(Math.abs(a.vars.time - a.target.time()) / a.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || a, i.onStartParams || n)
                    }, a
                }, _.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        onCompleteScope: this
                    }, i.immediateRender = i.immediateRender !== !1;
                    var s = this.tweenTo(e, i);
                    return s.duration(Math.abs(s.vars.time - t) / this._timeScale || .001)
                }, _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var s, a, l, _, u, p, c = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._duration,
                        m = this._time,
                        d = this._totalTime,
                        g = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        T = this._paused,
                        w = this._cycle;
                    if (t >= c ? (this._locked || (this._totalTime = c, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (a = !0, _ = "onComplete", 0 === this._duration && (0 === t || 0 > y || y === r) && y !== t && this._first && (u = !0, y > r && (_ = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r, this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = f, t = f + 1e-4)) : 1e-7 > t ? (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === f && y !== r && (y > 0 || 0 > t && y >= 0) && !this._locked) && (_ = "onReverseComplete", a = this._reversed), 0 > t ? (this._active = !1, y >= 0 && this._first && (u = !0), this._rawPrevTime = t) : (this._rawPrevTime = f || !e || t || this._rawPrevTime === t ? t : r, t = 0, this._initted || (u = !0))) : (0 === f && 0 > y && (u = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = f + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 !== (1 & this._cycle) && (this._time = f - this._time), this._time > f ? (this._time = f, t = f + 1e-4) : 0 > this._time ? this._time = t = 0 : t = this._time))), this._cycle !== w && !this._locked) {
                        var x = this._yoyo && 0 !== (1 & w),
                            b = x === (this._yoyo && 0 !== (1 & this._cycle)),
                            P = this._totalTime,
                            S = this._cycle,
                            k = this._rawPrevTime,
                            R = this._time;
                        if (this._totalTime = w * f, w > this._cycle ? x = !x : this._totalTime += f, this._time = m, this._rawPrevTime = 0 === f ? y - 1e-4 : y, this._cycle = w, this._locked = !0, m = x ? 0 : f, this.render(m, e, 0 === f), e || this._gc || this.vars.onRepeat && this.vars.onRepeat.apply(this.vars.onRepeatScope || this, this.vars.onRepeatParams || n), b && (m = x ? f + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !T) return;
                        this._time = R, this._totalTime = P, this._cycle = S, this._rawPrevTime = k
                    }
                    if (!(this._time !== m && this._first || i || u)) return d !== this._totalTime && this._onUpdate && (e || this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n)), void 0;
                    if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && 0 !== this._totalTime && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || n)), this._time >= m)
                        for (s = this._first; s && (l = s._next, !this._paused || T);)(s._active || s._startTime <= this._time && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    else
                        for (s = this._last; s && (l = s._prev, !this._paused || T);)(s._active || m >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = l;
                    this._onUpdate && (e || (o.length && h(), this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || n))), _ && (this._locked || this._gc || (g === this._startTime || v !== this._timeScale) && (0 === this._time || c >= this.totalDuration()) && (a && (o.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[_] && this.vars[_].apply(this.vars[_ + "Scope"] || this, this.vars[_ + "Params"] || n)))
                }, _.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var s, r, n = [],
                        a = this.getChildren(t, e, i),
                        o = 0,
                        h = a.length;
                    for (s = 0; h > s; s++) r = a[s], r.isActive() && (n[o++] = r);
                    return n
                }, _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        s = i.length;
                    for (e = 0; s > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (t > e[i].time) return e[i].name;
                    return null
                }, _.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, _.progress = function(t) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), !1) : this._time / this.duration()
                }, _.totalProgress = function(t) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, !1) : this._totalTime / this.totalDuration()
                }, _.totalDuration = function(e) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, _.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, s
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    s = [],
                    r = {},
                    n = function(t, e, i, s) {
                        this.a = t, this.b = e, this.c = i, this.d = s, this.da = s - t, this.ca = i - t, this.ba = e - t
                    },
                    a = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                    o = function(t, e, i, s) {
                        var r = {
                                a: t
                            },
                            n = {},
                            a = {},
                            o = {
                                c: s
                            },
                            h = (t + e) / 2,
                            l = (e + i) / 2,
                            _ = (i + s) / 2,
                            u = (h + l) / 2,
                            p = (l + _) / 2,
                            c = (p - u) / 8;
                        return r.b = h + (t - h) / 4, n.b = u + c, r.c = n.a = (r.b + n.b) / 2, n.c = a.a = (u + p) / 2, a.b = p - c, o.b = _ + (s - _) / 4, a.c = o.a = (a.b + o.b) / 2, [r, n, a, o]
                    },
                    h = function(t, r, n, a, h) {
                        var l, _, u, p, c, f, m, d, g, v, y, T, w, x = t.length - 1,
                            b = 0,
                            P = t[0].a;
                        for (l = 0; x > l; l++) c = t[b], _ = c.a, u = c.d, p = t[b + 1].d, h ? (y = e[l], T = i[l], w = .25 * (T + y) * r / (a ? .5 : s[l] || .5), f = u - (u - _) * (a ? .5 * r : 0 !== y ? w / y : 0), m = u + (p - u) * (a ? .5 * r : 0 !== T ? w / T : 0), d = u - (f + ((m - f) * (3 * y / (y + T) + .5) / 4 || 0))) : (f = u - .5 * (u - _) * r, m = u + .5 * (p - u) * r, d = u - (f + m) / 2), f += d, m += d, c.c = g = f, c.b = 0 !== l ? P : P = c.a + .6 * (c.c - c.a), c.da = u - _, c.ca = g - _, c.ba = P - _, n ? (v = o(_, P, g, u), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = m;
                        c = t[b], c.b = P, c.c = P + .4 * (c.d - P), c.da = c.d - c.a, c.ca = c.c - c.a, c.ba = P - c.a, n && (v = o(c.a, P, c.c, c.d), t.splice(b, 1, v[0], v[1], v[2], v[3]))
                    },
                    l = function(t, s, r, a) {
                        var o, h, l, _, u, p, c = [];
                        if (a)
                            for (t = [a].concat(t), h = t.length; --h > -1;) "string" == typeof(p = t[h][s]) && "=" === p.charAt(1) && (t[h][s] = a[s] + Number(p.charAt(0) + p.substr(2)));
                        if (o = t.length - 2, 0 > o) return c[0] = new n(t[0][s], 0, 0, t[-1 > o ? 0 : 1][s]), c;
                        for (h = 0; o > h; h++) l = t[h][s], _ = t[h + 1][s], c[h] = new n(l, 0, 0, _), r && (u = t[h + 2][s], e[h] = (e[h] || 0) + (_ - l) * (_ - l), i[h] = (i[h] || 0) + (u - _) * (u - _));
                        return c[h] = new n(t[h][s], 0, 0, t[h + 1][s]), c
                    },
                    _ = function(t, n, o, _, u, p) {
                        var c, f, m, d, g, v, y, T, w = {},
                            x = [],
                            b = p || t[0];
                        u = "string" == typeof u ? "," + u + "," : a, null == n && (n = 1);
                        for (f in t[0]) x.push(f);
                        if (t.length > 1) {
                            for (T = t[t.length - 1], y = !0, c = x.length; --c > -1;)
                                if (f = x[c], Math.abs(b[f] - T[f]) > .05) {
                                    y = !1;
                                    break
                                } y && (t = t.concat(), p && t.unshift(p), t.push(t[1]), p = t[t.length - 3])
                        }
                        for (e.length = i.length = s.length = 0, c = x.length; --c > -1;) f = x[c], r[f] = -1 !== u.indexOf("," + f + ","), w[f] = l(t, f, r[f], p);
                        for (c = e.length; --c > -1;) e[c] = Math.sqrt(e[c]), i[c] = Math.sqrt(i[c]);
                        if (!_) {
                            for (c = x.length; --c > -1;)
                                if (r[f])
                                    for (m = w[x[c]], v = m.length - 1, d = 0; v > d; d++) g = m[d + 1].da / i[d] + m[d].da / e[d], s[d] = (s[d] || 0) + g * g;
                            for (c = s.length; --c > -1;) s[c] = Math.sqrt(s[c])
                        }
                        for (c = x.length, d = o ? 4 : 1; --c > -1;) f = x[c], m = w[f], h(m, n, o, _, r[f]), y && (m.splice(0, d), m.splice(m.length - d, d));
                        return w
                    },
                    u = function(t, e, i) {
                        e = e || "soft";
                        var s, r, a, o, h, l, _, u, p, c, f, m = {},
                            d = "cubic" === e ? 3 : 2,
                            g = "soft" === e,
                            v = [];
                        if (g && i && (t = [i].concat(t)), null == t || d + 1 > t.length) throw "invalid Bezier data";
                        for (p in t[0]) v.push(p);
                        for (l = v.length; --l > -1;) {
                            for (p = v[l], m[p] = h = [], c = 0, u = t.length, _ = 0; u > _; _++) s = null == i ? t[_][p] : "string" == typeof(f = t[_][p]) && "=" === f.charAt(1) ? i[p] + Number(f.charAt(0) + f.substr(2)) : Number(f), g && _ > 1 && u - 1 > _ && (h[c++] = (s + h[c - 2]) / 2), h[c++] = s;
                            for (u = c - d + 1, c = 0, _ = 0; u > _; _ += d) s = h[_], r = h[_ + 1], a = h[_ + 2], o = 2 === d ? 0 : h[_ + 3], h[c++] = f = 3 === d ? new n(s, r, a, o) : new n(s, (2 * r + s) / 3, (2 * r + a) / 3, a);
                            h.length = c
                        }
                        return m
                    },
                    p = function(t, e, i) {
                        for (var s, r, n, a, o, h, l, _, u, p, c, f = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], n = p.a, a = p.d - n, o = p.c - n, h = p.b - n, s = r = 0, _ = 1; i >= _; _++) l = f * _, u = 1 - l, s = r - (r = (l * l * a + 3 * u * (l * o + u * h)) * l), c = m * i + _ - 1, e[c] = (e[c] || 0) + s * s
                    },
                    c = function(t, e) {
                        e = e >> 0 || 6;
                        var i, s, r, n, a = [],
                            o = [],
                            h = 0,
                            l = 0,
                            _ = e - 1,
                            u = [],
                            c = [];
                        for (i in t) p(t[i], a, e);
                        for (r = a.length, s = 0; r > s; s++) h += Math.sqrt(a[s]), n = s % e, c[n] = h, n === _ && (l += h, n = s / e >> 0, u[n] = c, o[n] = l, h = 0, c = []);
                        return {
                            length: l,
                            lengths: o,
                            segments: u
                        }
                    },
                    f = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.3",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var s, r, n, a, o, h = e.values || [],
                                l = {},
                                p = h[0],
                                f = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = f ? f instanceof Array ? f : [
                                ["x", "y", "rotation", f === !0 ? 0 : Number(f) || 0]
                            ] : null;
                            for (s in p) this._props.push(s);
                            for (n = this._props.length; --n > -1;) s = this._props[n], this._overwriteProps.push(s), r = this._func[s] = "function" == typeof t[s], l[s] = r ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]() : parseFloat(t[s]), o || l[s] !== h[0][s] && (o = l);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? _(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : u(h, e.type, l), this._segCount = this._beziers[s].length, this._timeRes) {
                                var m = c(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (f = this._autoRotate)
                                for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), n = f.length; --n > -1;) {
                                    for (a = 0; 3 > a; a++) s = f[n][a], this._func[s] = "function" == typeof t[s] ? t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)] : !1;
                                    s = f[n][2], this._initialRotations[n] = this._func[s] ? this._func[s].call(this._target) : this._target[s]
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, s, r, n, a, o, h, l, _, u, p = this._segCount,
                                c = this._func,
                                f = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (_ = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (l = p - 1; l > r && e >= (this._l2 = _[++r]););
                                    this._l1 = _[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (this._l1 > e && r > 0) {
                                    for (; r > 0 && (this._l1 = _[--r]) >= e;);
                                    0 === r && this._l1 > e ? this._l1 = 0 : r++, this._l2 = _[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && u.length - 1 > r) {
                                    for (l = u.length - 1; l > r && e >= (this._s2 = u[++r]););
                                    this._s1 = u[r - 1], this._si = r
                                } else if (this._s1 > e && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && this._s1 > e ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                o = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, o = (e - i * (1 / p)) * p;
                            for (s = 1 - o, r = this._props.length; --r > -1;) n = this._props[r], a = this._beziers[n][i], h = (o * o * a.da + 3 * s * (o * a.ca + s * a.ba)) * o + a.a, this._round[n] && (h = Math.round(h)), c[n] ? f[n](h) : f[n] = h;
                            if (this._autoRotate) {
                                var d, g, v, y, T, w, x, b = this._autoRotate;
                                for (r = b.length; --r > -1;) n = b[r][2], w = b[r][3] || 0, x = b[r][4] === !0 ? 1 : t, a = this._beziers[b[r][0]], d = this._beziers[b[r][1]], a && d && (a = a[i], d = d[i], g = a.a + (a.b - a.a) * o, y = a.b + (a.c - a.b) * o, g += (y - g) * o, y += (a.c + (a.d - a.c) * o - y) * o, v = d.a + (d.b - d.a) * o, T = d.b + (d.c - d.b) * o, v += (T - v) * o, T += (d.c + (d.d - d.c) * o - T) * o, h = m ? Math.atan2(T - v, y - g) * x + w : this._initialRotations[r], c[n] ? f[n](h) : f[n] = h)
                            }
                        }
                    }),
                    m = f.prototype;
                f.bezierThrough = _, f.cubicToQuadratic = o, f._autoCSS = !0, f.quadraticToCubic = function(t, e, i) {
                    return new n(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, f._cssRegister = function() {
                    var t = _gsScope._gsDefine.globals.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            s = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, n, a, o, h) {
                                e instanceof Array && (e = {
                                    values: e
                                }), h = new f;
                                var l, _, u, p = e.values,
                                    c = p.length - 1,
                                    m = [],
                                    d = {};
                                if (0 > c) return o;
                                for (l = 0; c >= l; l++) u = i(t, p[l], a, o, h, c !== l), m[l] = u.end;
                                for (_ in e) d[_] = e[_];
                                return d.values = m, o = new r(t, "bezier", 0, 0, u.pt, 2), o.data = u, o.plugin = h, o.setRatio = s, 0 === d.autoRotate && (d.autoRotate = !0), !d.autoRotate || d.autoRotate instanceof Array || (l = d.autoRotate === !0 ? 0 : Number(d.autoRotate), d.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", l, !1]
                                ] : null != u.end.x ? [
                                    ["x", "y", "rotation", l, !1]
                                ] : !1), d.autoRotate && (a._transform || a._enableTransforms(!1), u.autoRotate = a._target._gsTransform), h._onInitTween(u.proxy, d, a._tween), o
                            }
                        })
                    }
                }, m._roundProps = function(t, e) {
                    for (var i = this._overwriteProps, s = i.length; --s > -1;)(t[i[s]] || t.bezier || t.bezierThrough) && (this._round[i[s]] = e)
                }, m._kill = function(t) {
                    var e, i, s = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = s.length; --i > -1;) s[i] === e && s.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, s, r, n, a = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
                    },
                    o = {},
                    h = a.prototype = new t("css");
                h.constructor = a, a.version = "1.13.1", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", h = "px", a.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var l, _, u, p, c, f, m = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
                    d = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    g = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    v = /[^\d\-\.]/g,
                    y = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    w = /opacity:([^;]*)/i,
                    x = /alpha\(opacity *=.+?\)/i,
                    b = /^(rgb|hsl)/,
                    P = /([A-Z])/g,
                    S = /-([a-z])/gi,
                    k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    R = function(t, e) {
                        return e.toUpperCase()
                    },
                    A = /(?:Left|Right|Width)/i,
                    C = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    D = /,(?=[^\)]*(?:\(|$))/gi,
                    M = Math.PI / 180,
                    z = 180 / Math.PI,
                    I = {},
                    E = document,
                    L = E.createElement("div"),
                    F = E.createElement("img"),
                    N = a._internals = {
                        _specialProps: o
                    },
                    X = navigator.userAgent,
                    U = function() {
                        var t, e = X.indexOf("Android"),
                            i = E.createElement("div");
                        return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === e || Number(X.substr(e + 8, 1)) > 3), c = u && 6 > Number(X.substr(X.indexOf("Version/") + 8, 1)), p = -1 !== X.indexOf("Firefox"), /MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) && (f = parseFloat(RegExp.$1)), i.innerHTML = "<a style='top:1px;opacity:.55;'>a</a>", t = i.getElementsByTagName("a")[0], t ? /^0.55/.test(t.style.opacity) : !1
                    }(),
                    Y = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    j = function(t) {
                        window.console && console.log(t)
                    },
                    B = "",
                    q = "",
                    V = function(t, e) {
                        e = e || L;
                        var i, s, r = e.style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], s = 5; --s > -1 && void 0 === r[i[s] + t];);
                        return s >= 0 ? (q = 3 === s ? "ms" : i[s], B = "-" + q.toLowerCase() + "-", q + t) : null
                    },
                    G = E.defaultView ? E.defaultView.getComputedStyle : function() {},
                    W = a.getStyle = function(t, e, i, s, r) {
                        var n;
                        return U || "opacity" !== e ? (!s && t.style[e] ? n = t.style[e] : (i = i || G(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(P, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == r || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : r) : Y(t)
                    },
                    Q = N.convertToPixels = function(t, i, s, r, n) {
                        if ("px" === r || !r) return s;
                        if ("auto" === r || !s) return 0;
                        var o, h, l, _ = A.test(i),
                            u = t,
                            p = L.style,
                            c = 0 > s;
                        if (c && (s = -s), "%" === r && -1 !== i.indexOf("border")) o = s / 100 * (_ ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + W(t, "position") + ";line-height:0;", "%" !== r && u.appendChild) p[_ ? "borderLeftWidth" : "borderTopWidth"] = s + r;
                            else {
                                if (u = t.parentNode || E.body, h = u._gsCache, l = e.ticker.frame, h && _ && h.time === l) return h.width * s / 100;
                                p[_ ? "width" : "height"] = s + r
                            }
                            u.appendChild(L), o = parseFloat(L[_ ? "offsetWidth" : "offsetHeight"]), u.removeChild(L), _ && "%" === r && a.cacheWidths !== !1 && (h = u._gsCache = u._gsCache || {}, h.time = l, h.width = 100 * (o / s)), 0 !== o || n || (o = Q(t, i, s, r, !0))
                        }
                        return c ? -o : o
                    },
                    Z = N.calculateOffset = function(t, e, i) {
                        if ("absolute" !== W(t, "position", i)) return 0;
                        var s = "left" === e ? "Left" : "Top",
                            r = W(t, "margin" + s, i);
                        return t["offset" + s] - (Q(t, e, parseFloat(r), r.replace(y, "")) || 0)
                    },
                    $ = function(t, e) {
                        var i, s, r = {};
                        if (e = e || G(t, null))
                            if (i = e.length)
                                for (; --i > -1;) r[e[i].replace(S, R)] = e.getPropertyValue(e[i]);
                            else
                                for (i in e) r[i] = e[i];
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === r[i] && (r[i.replace(S, R)] = e[i]);
                        return U || (r.opacity = Y(t)), s = Pe(t, e, !1), r.rotation = s.rotation, r.skewX = s.skewX, r.scaleX = s.scaleX, r.scaleY = s.scaleY, r.x = s.x, r.y = s.y, xe && (r.z = s.z, r.rotationX = s.rotationX, r.rotationY = s.rotationY, r.scaleZ = s.scaleZ), r.filters && delete r.filters, r
                    },
                    H = function(t, e, i, s, r) {
                        var n, a, o, h = {},
                            l = t.style;
                        for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof n || "string" == typeof n) && (h[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(v, "") ? n : 0 : Z(t, a), void 0 !== l[a] && (o = new ue(l, a, l[a], o)));
                        if (s)
                            for (a in s) "className" !== a && (h[a] = s[a]);
                        return {
                            difs: h,
                            firstMPT: o
                        }
                    },
                    K = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    J = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    te = function(t, e, i) {
                        var s = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = K[e],
                            n = r.length;
                        for (i = i || G(t, null); --n > -1;) s -= parseFloat(W(t, "padding" + r[n], i, !0)) || 0, s -= parseFloat(W(t, "border" + r[n] + "Width", i, !0)) || 0;
                        return s
                    },
                    ee = function(t, e) {
                        (null == t || "" === t || "auto" === t || "auto auto" === t) && (t = "0 0");
                        var i = t.split(" "),
                            s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : i[0],
                            r = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : i[1];
                        return null == r ? r = "0" : "center" === r && (r = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== r.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === r.charAt(1), e.ox = parseFloat(s.replace(v, "")), e.oy = parseFloat(r.replace(v, ""))), s + " " + r + (i.length > 2 ? " " + i[2] : "")
                    },
                    ie = function(t, e) {
                        return "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e)
                    },
                    se = function(t, e) {
                        return null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * Number(t.substr(2)) + e : parseFloat(t)
                    },
                    re = function(t, e, i, s) {
                        var r, n, a, o, h = 1e-6;
                        return null == t ? o = e : "number" == typeof t ? o = t : (r = 360, n = t.split("_"), a = Number(n[0].replace(v, "")) * (-1 === t.indexOf("rad") ? 1 : z) - ("=" === t.charAt(1) ? 0 : e), n.length && (s && (s[i] = e + a), -1 !== t.indexOf("short") && (a %= r, a !== a % (r / 2) && (a = 0 > a ? a + r : a - r)), -1 !== t.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (0 | a / r) * r : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (0 | a / r) * r)), o = e + a), h > o && o > -h && (o = 0), o
                    },
                    ne = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    ae = function(t, e, i) {
                        return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 0 | 255 * (1 > 6 * t ? e + 6 * (i - e) * t : .5 > t ? i : 2 > 3 * t ? e + 6 * (i - e) * (2 / 3 - t) : e) + .5
                    },
                    oe = function(t) {
                        var e, i, s, r, n, a;
                        return t && "" !== t ? "number" == typeof t ? [t >> 16, 255 & t >> 8, 255 & t] : ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ne[t] ? ne[t] : "#" === t.charAt(0) ? (4 === t.length && (e = t.charAt(1), i = t.charAt(2), s = t.charAt(3), t = "#" + e + e + i + i + s + s), t = parseInt(t.substr(1), 16), [t >> 16, 255 & t >> 8, 255 & t]) : "hsl" === t.substr(0, 3) ? (t = t.match(m), r = Number(t[0]) % 360 / 360, n = Number(t[1]) / 100, a = Number(t[2]) / 100, i = .5 >= a ? a * (n + 1) : a + n - a * n, e = 2 * a - i, t.length > 3 && (t[3] = Number(t[3])), t[0] = ae(r + 1 / 3, e, i), t[1] = ae(r, e, i), t[2] = ae(r - 1 / 3, e, i), t) : (t = t.match(m) || ne.transparent, t[0] = Number(t[0]), t[1] = Number(t[1]), t[2] = Number(t[2]), t.length > 3 && (t[3] = Number(t[3])), t)) : ne.black
                    },
                    he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
                for (h in ne) he += "|" + h + "\\b";
                he = RegExp(he + ")", "gi");
                var le = function(t, e, i, s) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, n = e ? (t.match(he) || [""])[0] : "",
                            a = t.split(n).join("").match(g) || [],
                            o = t.substr(0, t.indexOf(a[0])),
                            h = ")" === t.charAt(t.length - 1) ? ")" : "",
                            l = -1 !== t.indexOf(" ") ? " " : ",",
                            _ = a.length,
                            u = _ > 0 ? a[0].replace(m, "") : "";
                        return _ ? r = e ? function(t) {
                            var e, p, c, f;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (f = t.replace(D, "|").split("|"), c = 0; f.length > c; c++) f[c] = r(f[c]);
                                return f.join(",")
                            }
                            if (e = (t.match(he) || [n])[0], p = t.split(e).join("").match(g) || [], c = p.length, _ > c--)
                                for (; _ > ++c;) p[c] = i ? p[0 | (c - 1) / 2] : a[c];
                            return o + p.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, n, p;
                            if ("number" == typeof t) t += u;
                            else if (s && D.test(t)) {
                                for (n = t.replace(D, "|").split("|"), p = 0; n.length > p; p++) n[p] = r(n[p]);
                                return n.join(",")
                            }
                            if (e = t.match(g) || [], p = e.length, _ > p--)
                                for (; _ > ++p;) e[p] = i ? e[0 | (p - 1) / 2] : a[p];
                            return o + e.join(l) + h
                        } : function(t) {
                            return t
                        }
                    },
                    _e = function(t) {
                        return t = t.split(","),
                            function(e, i, s, r, n, a, o) {
                                var h, l = (i + "").split(" ");
                                for (o = {}, h = 0; 4 > h; h++) o[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0];
                                return r.parse(e, o, n, a)
                            }
                    },
                    ue = (N._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, s, r, n = this.data, a = n.proxy, o = n.firstMPT, h = 1e-6; o;) e = a[o.v], o.r ? e = Math.round(e) : h > e && e > -h && (e = 0), o.t[o.p] = e, o = o._next;
                        if (n.autoRotate && (n.autoRotate.rotation = a.rotation), 1 === t)
                            for (o = n.firstMPT; o;) {
                                if (i = o.t, i.type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, s = 1; i.l > s; s++) r += i["xn" + s] + i["xs" + (s + 1)];
                                        i.e = r
                                    }
                                } else i.e = i.s + i.xs0;
                                o = o._next
                            }
                    }, function(t, e, i, s, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, s && (s._prev = this, this._next = s)
                    }),
                    pe = (N._parseToProxy = function(t, e, i, s, r, n) {
                        var a, o, h, l, _, u = s,
                            p = {},
                            c = {},
                            f = i._transform,
                            m = I;
                        for (i._transform = null, I = e, s = _ = i.parse(t, e, s, r), I = m, n && (i._transform = f, u && (u._prev = null, u._prev && (u._prev._next = null))); s && s !== u;) {
                            if (1 >= s.type && (o = s.p, c[o] = s.s + s.c, p[o] = s.s, n || (l = new ue(s, "s", o, l, s.r), s.c = 0), 1 === s.type))
                                for (a = s.l; --a > 0;) h = "xn" + a, o = s.p + "_" + h, c[o] = s.data[h], p[o] = s[h], n || (l = new ue(s, h, o, l, s.rxp[h]));
                            s = s._next
                        }
                        return {
                            proxy: p,
                            end: c,
                            firstMPT: l,
                            pt: _
                        }
                    }, N.CSSPropTween = function(t, e, s, r, a, o, h, l, _, u, p) {
                        this.t = t, this.p = e, this.s = s, this.c = r, this.n = h || e, t instanceof pe || n.push(this.n), this.r = l, this.type = o || 0, _ && (this.pr = _, i = !0), this.b = void 0 === u ? s : u, this.e = void 0 === p ? s + r : p, a && (this._next = a, a._prev = this)
                    }),
                    ce = a.parseComplex = function(t, e, i, s, r, n, a, o, h, _) {
                        i = i || n || "", a = new pe(t, e, 0, 0, a, _ ? 2 : 1, null, !1, o, i, s), s += "";
                        var u, p, c, f, g, v, y, T, w, x, P, S, k = i.split(", ").join(",").split(" "),
                            R = s.split(", ").join(",").split(" "),
                            A = k.length,
                            C = l !== !1;
                        for ((-1 !== s.indexOf(",") || -1 !== i.indexOf(",")) && (k = k.join(" ").replace(D, ", ").split(" "), R = R.join(" ").replace(D, ", ").split(" "), A = k.length), A !== R.length && (k = (n || "").split(" "), A = k.length), a.plugin = h, a.setRatio = _, u = 0; A > u; u++)
                            if (f = k[u], g = R[u], T = parseFloat(f), T || 0 === T) a.appendXtra("", T, ie(g, T), g.replace(d, ""), C && -1 !== g.indexOf("px"), !0);
                            else if (r && ("#" === f.charAt(0) || ne[f] || b.test(f))) S = "," === g.charAt(g.length - 1) ? ")," : ")", f = oe(f), g = oe(g), w = f.length + g.length > 6, w && !U && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(R[u]).join("transparent")) : (U || (w = !1), a.appendXtra(w ? "rgba(" : "rgb(", f[0], g[0] - f[0], ",", !0, !0).appendXtra("", f[1], g[1] - f[1], ",", !0).appendXtra("", f[2], g[2] - f[2], w ? "," : S, !0), w && (f = 4 > f.length ? 1 : f[3], a.appendXtra("", f, (4 > g.length ? 1 : g[3]) - f, S, !1)));
                        else if (v = f.match(m)) {
                            if (y = g.match(d), !y || y.length !== v.length) return a;
                            for (c = 0, p = 0; v.length > p; p++) P = v[p], x = f.indexOf(P, c), a.appendXtra(f.substr(c, x - c), Number(P), ie(y[p], P), "", C && "px" === f.substr(x + P.length, 2), 0 === p), c = x + P.length;
                            a["xs" + a.l] += f.substr(c)
                        } else a["xs" + a.l] += a.l ? " " + f : f;
                        if (-1 !== s.indexOf("=") && a.data) {
                            for (S = a.xs0 + a.data.s, u = 1; a.l > u; u++) S += a["xs" + u] + a.data["xn" + u];
                            a.e = S + a["xs" + u]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    fe = 9;
                for (h = pe.prototype, h.l = h.pr = 0; --fe > 0;) h["xn" + fe] = 0, h["xs" + fe] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, s, r, n) {
                    var a = this,
                        o = a.l;
                    return a["xs" + o] += n && o ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = s || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = r, a["xn" + o] = e, a.plugin || (a.xfirst = new pe(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                        s: e + i
                    }, a.rxp = {}, a.s = e, a.c = i, a.r = r, a)) : (a["xs" + o] += e + (s || ""), a)
                };
                var me = function(t, e) {
                        e = e || {}, this.p = e.prefix ? V(t) || t : t, o[t] = o[this.p] = this, this.format = e.formatter || le(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    de = N._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var s, r, n = t.split(","),
                            a = e.defaultValue;
                        for (i = i || [a], s = 0; n.length > s; s++) e.prefix = 0 === s && e.prefix, e.defaultValue = i[s] || a, r = new me(n[s], e)
                    },
                    ge = function(t) {
                        if (!o[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            de(t, {
                                parser: function(t, i, s, r, n, a, h) {
                                    var l = (_gsScope.GreenSockGlobals || _gsScope).com.greensock.plugins[e];
                                    return l ? (l._cssRegister(), o[s].parse(t, i, s, r, n, a, h)) : (j("Error: " + e + " js file not loaded."), n)
                                }
                            })
                        }
                    };
                h = me.prototype, h.parseComplex = function(t, e, i, s, r, n) {
                    var a, o, h, l, _, u, p = this.keyword;
                    if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"), h = i.replace(D, "|").split("|")) : p && (o = [e], h = [i])), h) {
                        for (l = h.length > o.length ? h.length : o.length, a = 0; l > a; a++) e = o[a] = o[a] || this.dflt, i = h[a] = h[a] || this.dflt, p && (_ = e.indexOf(p), u = i.indexOf(p), _ !== u && (i = -1 === u ? h : o, i[a] += " " + p));
                        e = o.join(", "), i = h.join(", ")
                    }
                    return ce(t, this.p, e, i, this.clrs, this.dflt, s, this.pr, r, n)
                }, h.parse = function(t, e, i, s, n, a) {
                    return this.parseComplex(t.style, this.format(W(t, this.p, r, !1, this.dflt)), this.format(e), n, a)
                }, a.registerSpecialProp = function(t, e, i) {
                    de(t, {
                        parser: function(t, s, r, n, a, o) {
                            var h = new pe(t, r, 0, 0, a, 2, r, !1, i);
                            return h.plugin = o, h.setRatio = e(t, s, n._tween, r), h
                        },
                        priority: i
                    })
                };
                var ve = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    ye = V("transform"),
                    Te = B + "transform",
                    we = V("transformOrigin"),
                    xe = null !== V("perspective"),
                    be = N.Transform = function() {
                        this.skewY = 0
                    },
                    Pe = N.getTransform = function(t, e, i, s) {
                        if (t._gsTransform && i && !s) return t._gsTransform;
                        var r, n, o, h, l, _, u, p, c, f, m, d, g, v = i ? t._gsTransform || new be : new be,
                            y = 0 > v.scaleX,
                            T = 2e-5,
                            w = 1e5,
                            x = 179.99,
                            b = x * M,
                            P = xe ? parseFloat(W(t, we, e, !1, "0 0 0").split(" ")[2]) || v.zOrigin || 0 : 0;
                        if (ye ? r = W(t, Te, e, !0) : t.currentStyle && (r = t.currentStyle.filter.match(C), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), v.x || 0, v.y || 0].join(",") : ""), r && "none" !== r && "matrix(1, 0, 0, 1, 0, 0)" !== r) {
                            for (n = (r || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [], o = n.length; --o > -1;) h = Number(n[o]), n[o] = (l = h - (h |= 0)) ? (0 | l * w + (0 > l ? -.5 : .5)) / w + h : h;
                            if (16 === n.length) {
                                var S = n[8],
                                    k = n[9],
                                    R = n[10],
                                    A = n[12],
                                    O = n[13],
                                    D = n[14];
                                if (v.zOrigin && (D = -v.zOrigin, A = S * D - n[12], O = k * D - n[13], D = R * D + v.zOrigin - n[14]), !i || s || null == v.rotationX) {
                                    var I, E, L, F, N, X, U, Y = n[0],
                                        j = n[1],
                                        B = n[2],
                                        q = n[3],
                                        V = n[4],
                                        G = n[5],
                                        Q = n[6],
                                        Z = n[7],
                                        $ = n[11],
                                        H = Math.atan2(Q, R),
                                        K = -b > H || H > b;
                                    v.rotationX = H * z, H && (F = Math.cos(-H), N = Math.sin(-H), I = V * F + S * N, E = G * F + k * N, L = Q * F + R * N, S = V * -N + S * F, k = G * -N + k * F, R = Q * -N + R * F, $ = Z * -N + $ * F, V = I, G = E, Q = L), H = Math.atan2(S, Y), v.rotationY = H * z, H && (X = -b > H || H > b, F = Math.cos(-H), N = Math.sin(-H), I = Y * F - S * N, E = j * F - k * N, L = B * F - R * N, k = j * N + k * F, R = B * N + R * F, $ = q * N + $ * F, Y = I, j = E, B = L), H = Math.atan2(j, G), v.rotation = H * z, H && (U = -b > H || H > b, F = Math.cos(-H), N = Math.sin(-H), Y = Y * F + V * N, E = j * F + G * N, G = j * -N + G * F, Q = B * -N + Q * F, j = E), U && K ? v.rotation = v.rotationX = 0 : U && X ? v.rotation = v.rotationY = 0 : X && K && (v.rotationY = v.rotationX = 0), v.scaleX = (0 | Math.sqrt(Y * Y + j * j) * w + .5) / w, v.scaleY = (0 | Math.sqrt(G * G + k * k) * w + .5) / w, v.scaleZ = (0 | Math.sqrt(Q * Q + R * R) * w + .5) / w, v.skewX = 0, v.perspective = $ ? 1 / (0 > $ ? -$ : $) : 0, v.x = A, v.y = O, v.z = D
                                }
                            } else if (!(xe && !s && n.length && v.x === n[4] && v.y === n[5] && (v.rotationX || v.rotationY) || void 0 !== v.x && "none" === W(t, "display", e))) {
                                var J = n.length >= 6,
                                    te = J ? n[0] : 1,
                                    ee = n[1] || 0,
                                    ie = n[2] || 0,
                                    se = J ? n[3] : 1;
                                v.x = n[4] || 0, v.y = n[5] || 0, _ = Math.sqrt(te * te + ee * ee), u = Math.sqrt(se * se + ie * ie), p = te || ee ? Math.atan2(ee, te) * z : v.rotation || 0, c = ie || se ? Math.atan2(ie, se) * z + p : v.skewX || 0, f = _ - Math.abs(v.scaleX || 0), m = u - Math.abs(v.scaleY || 0), Math.abs(c) > 90 && 270 > Math.abs(c) && (y ? (_ *= -1, c += 0 >= p ? 180 : -180, p += 0 >= p ? 180 : -180) : (u *= -1, c += 0 >= c ? 180 : -180)), d = (p - v.rotation) % 180, g = (c - v.skewX) % 180, (void 0 === v.skewX || f > T || -T > f || m > T || -T > m || d > -x && x > d && false | d * w || g > -x && x > g && false | g * w) && (v.scaleX = _, v.scaleY = u, v.rotation = p, v.skewX = c), xe && (v.rotationX = v.rotationY = v.z = 0, v.perspective = parseFloat(a.defaultTransformPerspective) || 0, v.scaleZ = 1)
                            }
                            v.zOrigin = P;
                            for (o in v) T > v[o] && v[o] > -T && (v[o] = 0)
                        } else v = {
                            x: 0,
                            y: 0,
                            z: 0,
                            scaleX: 1,
                            scaleY: 1,
                            scaleZ: 1,
                            skewX: 0,
                            perspective: 0,
                            rotation: 0,
                            rotationX: 0,
                            rotationY: 0,
                            zOrigin: 0
                        };
                        return i && (t._gsTransform = v), v.xPercent = v.yPercent = 0, v
                    },
                    Se = function(t) {
                        var e, i, s = this.data,
                            r = -s.rotation * M,
                            n = r + s.skewX * M,
                            a = 1e5,
                            o = (0 | Math.cos(r) * s.scaleX * a) / a,
                            h = (0 | Math.sin(r) * s.scaleX * a) / a,
                            l = (0 | Math.sin(n) * -s.scaleY * a) / a,
                            _ = (0 | Math.cos(n) * s.scaleY * a) / a,
                            u = this.t.style,
                            p = this.t.currentStyle;
                        if (p) {
                            i = h, h = -l, l = -i, e = p.filter, u.filter = "";
                            var c, m, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                v = "absolute" !== p.position,
                                w = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + h + ", M21=" + l + ", M22=" + _,
                                x = s.x + d * s.xPercent / 100,
                                b = s.y + g * s.yPercent / 100;
                            if (null != s.ox && (c = (s.oxp ? .01 * d * s.ox : s.ox) - d / 2, m = (s.oyp ? .01 * g * s.oy : s.oy) - g / 2, x += c - (c * o + m * h), b += m - (c * l + m * _)), v ? (c = d / 2, m = g / 2, w += ", Dx=" + (c - (c * o + m * h) + x) + ", Dy=" + (m - (c * l + m * _) + b) + ")") : w += ", sizingMethod='auto expand')", u.filter = -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? e.replace(O, w) : w + " " + e, (0 === t || 1 === t) && 1 === o && 0 === h && 0 === l && 1 === _ && (v && -1 === w.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf("gradient(" && e.indexOf("Alpha")) && u.removeAttribute("filter")), !v) {
                                var P, S, k, R = 8 > f ? 1 : -1;
                                for (c = s.ieOffsetX || 0, m = s.ieOffsetY || 0, s.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > h ? -h : h) * g)) / 2 + x), s.ieOffsetY = Math.round((g - ((0 > _ ? -_ : _) * g + (0 > l ? -l : l) * d)) / 2 + b), fe = 0; 4 > fe; fe++) S = J[fe], P = p[S], i = -1 !== P.indexOf("px") ? parseFloat(P) : Q(this.t, S, parseFloat(P), P.replace(y, "")) || 0, k = i !== s[S] ? 2 > fe ? -s.ieOffsetX : -s.ieOffsetY : 2 > fe ? c - s.ieOffsetX : m - s.ieOffsetY, u[S] = (s[S] = Math.round(i - k * (0 === fe || 2 === fe ? 1 : R))) + "px"
                            }
                        }
                    },
                    ke = N.set3DTransformRatio = function(t) {
                        var e, i, s, r, n, a, o, h, l, _, u, c, f, m, d, g, v, y, T, w, x, b, P, S = this.data,
                            k = this.t.style,
                            R = S.rotation * M,
                            A = S.scaleX,
                            C = S.scaleY,
                            O = S.scaleZ,
                            D = S.x,
                            z = S.y,
                            I = S.z,
                            E = S.perspective;
                        if (!(1 !== t && 0 !== t || "auto" !== S.force3D || S.rotationY || S.rotationX || 1 !== O || E || I)) return Re.call(this, t), void 0;
                        if (p) {
                            var L = 1e-4;
                            L > A && A > -L && (A = O = 2e-5), L > C && C > -L && (C = O = 2e-5), !E || S.z || S.rotationX || S.rotationY || (E = 0)
                        }
                        if (R || S.skewX) y = Math.cos(R), T = Math.sin(R), e = y, n = T, S.skewX && (R -= S.skewX * M, y = Math.cos(R), T = Math.sin(R), "simple" === S.skewType && (w = Math.tan(S.skewX * M), w = Math.sqrt(1 + w * w), y *= w, T *= w)), i = -T, a = y;
                        else {
                            if (!(S.rotationY || S.rotationX || 1 !== O || E)) return k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + z + "px," + I + "px)" + (1 !== A || 1 !== C ? " scale(" + A + "," + C + ")" : ""), void 0;
                            e = a = 1, i = n = 0
                        }
                        u = 1, s = r = o = h = l = _ = c = f = m = 0, d = E ? -1 / E : 0, g = S.zOrigin, v = 1e5, R = S.rotationY * M, R && (y = Math.cos(R), T = Math.sin(R), l = u * -T, f = d * -T, s = e * T, o = n * T, u *= y, d *= y, e *= y, n *= y), R = S.rotationX * M, R && (y = Math.cos(R), T = Math.sin(R), w = i * y + s * T, x = a * y + o * T, b = _ * y + u * T, P = m * y + d * T, s = i * -T + s * y, o = a * -T + o * y, u = _ * -T + u * y, d = m * -T + d * y, i = w, a = x, _ = b, m = P), 1 !== O && (s *= O, o *= O, u *= O, d *= O), 1 !== C && (i *= C, a *= C, _ *= C, m *= C), 1 !== A && (e *= A, n *= A, l *= A, f *= A), g && (c -= g, r = s * c, h = o * c, c = u * c + g), r = (w = (r += D) - (r |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + r : r, h = (w = (h += z) - (h |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + h : h, c = (w = (c += I) - (c |= 0)) ? (0 | w * v + (0 > w ? -.5 : .5)) / v + c : c, k[ye] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(") + [(0 | e * v) / v, (0 | n * v) / v, (0 | l * v) / v, (0 | f * v) / v, (0 | i * v) / v, (0 | a * v) / v, (0 | _ * v) / v, (0 | m * v) / v, (0 | s * v) / v, (0 | o * v) / v, (0 | u * v) / v, (0 | d * v) / v, r, h, c, E ? 1 + -c / E : 1].join(",") + ")"
                    },
                    Re = N.set2DTransformRatio = function(t) {
                        var e, i, s, r, n, a = this.data,
                            o = this.t,
                            h = o.style,
                            l = a.x,
                            _ = a.y;
                        return a.rotationX || a.rotationY || a.z || a.force3D === !0 || "auto" === a.force3D && 1 !== t && 0 !== t ? (this.setRatio = ke, ke.call(this, t), void 0) : (a.rotation || a.skewX ? (e = a.rotation * M, i = e - a.skewX * M, s = 1e5, r = a.scaleX * s, n = a.scaleY * s, h[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + (0 | Math.cos(e) * r) / s + "," + (0 | Math.sin(e) * r) / s + "," + (0 | Math.sin(i) * -n) / s + "," + (0 | Math.cos(i) * n) / s + "," + l + "," + _ + ")") : h[ye] = (a.xPercent || a.yPercent ? "translate(" + a.xPercent + "%," + a.yPercent + "%) matrix(" : "matrix(") + a.scaleX + ",0,0," + a.scaleY + "," + l + "," + _ + ")", void 0)
                    };
                de("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent", {
                    parser: function(t, e, i, s, n, o, h) {
                        if (s._transform) return n;
                        var l, _, u, p, c, f, m, d = s._transform = Pe(t, r, !0, h.parseTransform),
                            g = t.style,
                            v = 1e-6,
                            y = ve.length,
                            T = h,
                            w = {};
                        if ("string" == typeof T.transform && ye) u = L.style, u[ye] = T.transform, u.display = "block", u.position = "absolute", E.body.appendChild(L), l = Pe(L, null, !1), E.body.removeChild(L);
                        else if ("object" == typeof T) {
                            if (l = {
                                    scaleX: se(null != T.scaleX ? T.scaleX : T.scale, d.scaleX),
                                    scaleY: se(null != T.scaleY ? T.scaleY : T.scale, d.scaleY),
                                    scaleZ: se(T.scaleZ, d.scaleZ),
                                    x: se(T.x, d.x),
                                    y: se(T.y, d.y),
                                    z: se(T.z, d.z),
                                    xPercent: se(T.xPercent, d.xPercent),
                                    yPercent: se(T.yPercent, d.yPercent),
                                    perspective: se(T.transformPerspective, d.perspective)
                                }, m = T.directionalRotation, null != m)
                                if ("object" == typeof m)
                                    for (u in m) T[u] = m[u];
                                else T.rotation = m;
                            "string" == typeof T.x && -1 !== T.x.indexOf("%") && (l.x = 0, l.xPercent = se(T.x, d.xPercent)), "string" == typeof T.y && -1 !== T.y.indexOf("%") && (l.y = 0, l.yPercent = se(T.y, d.yPercent)), l.rotation = re("rotation" in T ? T.rotation : "shortRotation" in T ? T.shortRotation + "_short" : "rotationZ" in T ? T.rotationZ : d.rotation, d.rotation, "rotation", w), xe && (l.rotationX = re("rotationX" in T ? T.rotationX : "shortRotationX" in T ? T.shortRotationX + "_short" : d.rotationX || 0, d.rotationX, "rotationX", w), l.rotationY = re("rotationY" in T ? T.rotationY : "shortRotationY" in T ? T.shortRotationY + "_short" : d.rotationY || 0, d.rotationY, "rotationY", w)), l.skewX = null == T.skewX ? d.skewX : re(T.skewX, d.skewX), l.skewY = null == T.skewY ? d.skewY : re(T.skewY, d.skewY), (_ = l.skewY - d.skewY) && (l.skewX += _, l.rotation += _)
                        }
                        for (xe && null != T.force3D && (d.force3D = T.force3D, f = !0), d.skewType = T.skewType || d.skewType || a.defaultSkewType, c = d.force3D || d.z || d.rotationX || d.rotationY || l.z || l.rotationX || l.rotationY || l.perspective, c || null == T.scale || (l.scaleZ = 1); --y > -1;) i = ve[y], p = l[i] - d[i], (p > v || -v > p || null != I[i]) && (f = !0, n = new pe(d, i, d[i], p, n), i in w && (n.e = w[i]), n.xs0 = 0, n.plugin = o, s._overwriteProps.push(n.n));
                        return p = T.transformOrigin, (p || xe && c && d.zOrigin) && (ye ? (f = !0, i = we, p = (p || W(t, i, r, !1, "50% 50%")) + "", n = new pe(g, i, 0, 0, n, -1, "transformOrigin"), n.b = g[i], n.plugin = o, xe ? (u = d.zOrigin, p = p.split(" "), d.zOrigin = (p.length > 2 && (0 === u || "0px" !== p[2]) ? parseFloat(p[2]) : u) || 0, n.xs0 = n.e = p[0] + " " + (p[1] || "50%") + " 0px", n = new pe(d, "zOrigin", 0, 0, n, -1, n.n), n.b = u, n.xs0 = n.e = d.zOrigin) : n.xs0 = n.e = p) : ee(p + "", d)), f && (s._transformType = c || 3 === this._transformType ? 3 : 2), n
                    },
                    prefix: !0
                }), de("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), de("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, a) {
                        e = this.format(e);
                        var o, h, l, _, u, p, c, f, m, d, g, v, y, T, w, x, b = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (m = parseFloat(t.offsetWidth), d = parseFloat(t.offsetHeight), o = e.split(" "), h = 0; b.length > h; h++) this.p.indexOf("border") && (b[h] = V(b[h])), u = _ = W(t, b[h], r, !1, "0px"), -1 !== u.indexOf(" ") && (_ = u.split(" "), u = _[0], _ = _[1]), p = l = o[h], c = parseFloat(u), v = u.substr((c + "").length), y = "=" === p.charAt(1), y ? (f = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), f *= parseFloat(p), g = p.substr((f + "").length - (0 > f ? 1 : 0)) || "") : (f = parseFloat(p), g = p.substr((f + "").length)), "" === g && (g = s[i] || v), g !== v && (T = Q(t, "borderLeft", c, v), w = Q(t, "borderTop", c, v), "%" === g ? (u = 100 * (T / m) + "%", _ = 100 * (w / d) + "%") : "em" === g ? (x = Q(t, "borderLeft", 1, "em"), u = T / x + "em", _ = w / x + "em") : (u = T + "px", _ = w + "px"), y && (p = parseFloat(u) + f + g, l = parseFloat(_) + f + g)), a = ce(P, b[h], u + " " + _, p + " " + l, !1, "0px", a);
                        return a
                    },
                    prefix: !0,
                    formatter: le("0px 0px 0px 0px", !1, !0)
                }), de("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l, _, u, p, c = "background-position",
                            m = r || G(t, null),
                            d = this.format((m ? f ? m.getPropertyValue(c + "-x") + " " + m.getPropertyValue(c + "-y") : m.getPropertyValue(c) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            g = this.format(e);
                        if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && (p = W(t, "backgroundImage").replace(k, ""), p && "none" !== p)) {
                            for (o = d.split(" "), h = g.split(" "), F.setAttribute("src", p), l = 2; --l > -1;) d = o[l], _ = -1 !== d.indexOf("%"), _ !== (-1 !== h[l].indexOf("%")) && (u = 0 === l ? t.offsetWidth - F.width : t.offsetHeight - F.height, o[l] = _ ? parseFloat(d) / 100 * u + "px" : 100 * (parseFloat(d) / u) + "%");
                            d = o.join(" ")
                        }
                        return this.parseComplex(t.style, d, g, n, a)
                    },
                    formatter: ee
                }), de("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: ee
                }), de("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), de("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), de("transformStyle", {
                    prefix: !0
                }), de("backfaceVisibility", {
                    prefix: !0
                }), de("userSelect", {
                    prefix: !0
                }), de("margin", {
                    parser: _e("marginTop,marginRight,marginBottom,marginLeft")
                }), de("padding", {
                    parser: _e("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), de("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, s, n, a) {
                        var o, h, l;
                        return 9 > f ? (h = t.currentStyle, l = 8 > f ? " " : ",", o = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (o = this.format(W(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
                    }
                }), de("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), de("autoRound,strictUnits", {
                    parser: function(t, e, i, s, r) {
                        return r
                    }
                }), de("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, s, n, a) {
                        return this.parseComplex(t.style, this.format(W(t, "borderTopWidth", r, !1, "0px") + " " + W(t, "borderTopStyle", r, !1, "solid") + " " + W(t, "borderTopColor", r, !1, "#000")), this.format(e), n, a)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(he) || ["#000"])[0]
                    }
                }), de("borderWidth", {
                    parser: _e("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), de("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, s, r) {
                        var n = t.style,
                            a = "cssFloat" in n ? "cssFloat" : "styleFloat";
                        return new pe(n, a, 0, 0, r, -1, i, !1, 0, n[a], e)
                    }
                });
                var Ae = function(t) {
                    var e, i = this.t,
                        s = i.filter || W(this.data, "filter"),
                        r = 0 | this.s + this.c * t;
                    100 === r && (-1 === s.indexOf("atrix(") && -1 === s.indexOf("radient(") && -1 === s.indexOf("oader(") ? (i.removeAttribute("filter"), e = !W(this.data, "filter")) : (i.filter = s.replace(x, ""), e = !0)), e || (this.xn1 && (i.filter = s = s || "alpha(opacity=" + r + ")"), -1 === s.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = s + " alpha(opacity=" + r + ")") : i.filter = s.replace(T, "opacity=" + r))
                };
                de("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, s, n, a) {
                        var o = parseFloat(W(t, "opacity", r, !1, "1")),
                            h = t.style,
                            l = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), l && 1 === o && "hidden" === W(t, "visibility", r) && 0 !== e && (o = 0), U ? n = new pe(h, "opacity", o, e - o, n) : (n = new pe(h, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = l ? 1 : 0, h.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Ae), l && (n = new pe(h, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", s._overwriteProps.push(n.n), s._overwriteProps.push(i)), n
                    }
                });
                var Ce = function(t, e) {
                        e && (t.removeProperty ? ("ms" === e.substr(0, 2) && (e = "M" + e.substr(1)), t.removeProperty(e.replace(P, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    Oe = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ce(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                de("className", {
                    parser: function(t, e, s, n, a, o, h) {
                        var l, _, u, p, c, f = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (a = n._classNamePT = new pe(t, s, 0, 0, a, 2), a.setRatio = Oe, a.pr = -11, i = !0, a.b = f, _ = $(t, r), u = t._gsClassPT) {
                            for (p = {}, c = u.data; c;) p[c.p] = 1, c = c._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), n._tween._duration && (t.setAttribute("class", a.e), l = H(t, _, $(t), h, p), t.setAttribute("class", f), a.data = l.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, l.difs, a, o)), a
                    }
                });
                var De = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, s, r, n = this.t.style,
                            a = o.transform.parse;
                        if ("all" === this.e) n.cssText = "", r = !0;
                        else
                            for (e = this.e.split(","), s = e.length; --s > -1;) i = e[s], o[i] && (o[i].parse === a ? r = !0 : i = "transformOrigin" === i ? we : o[i].p), Ce(n, i);
                        r && (Ce(n, ye), this.t._gsTransform && delete this.t._gsTransform)
                    }
                };
                for (de("clearProps", {
                        parser: function(t, e, s, r, n) {
                            return n = new pe(t, s, 0, 0, n, 2), n.setRatio = De, n.e = e, n.pr = -10, n.data = r._tween, i = !0, n
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), fe = h.length; fe--;) ge(h[fe]);
                h = a.prototype, h._firstPT = null, h._onInitTween = function(t, e, o) {
                    if (!t.nodeType) return !1;
                    this._target = t, this._tween = o, this._vars = e, l = e.autoRound, i = !1, s = e.suffixMap || a.suffixMap, r = G(t, ""), n = this._overwriteProps;
                    var h, p, f, m, d, g, v, y, T, x = t.style;
                    if (_ && "" === x.zIndex && (h = W(t, "zIndex", r), ("auto" === h || "" === h) && this._addLazySet(x, "zIndex", 0)), "string" == typeof e && (m = x.cssText, h = $(t, r), x.cssText = m + ";" + e, h = H(t, h, $(t)).difs, !U && w.test(e) && (h.opacity = parseFloat(RegExp.$1)), e = h, x.cssText = m), this._firstPT = p = this.parse(t, e, null), this._transformType) {
                        for (T = 3 === this._transformType, ye ? u && (_ = !0, "" === x.zIndex && (v = W(t, "zIndex", r), ("auto" === v || "" === v) && this._addLazySet(x, "zIndex", 0)), c && this._addLazySet(x, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (T ? "visible" : "hidden"))) : x.zoom = 1, f = p; f && f._next;) f = f._next;
                        y = new pe(t, "transform", 0, 0, null, 2), this._linkCSSP(y, null, f), y.setRatio = T && xe ? ke : ye ? Re : Se, y.data = this._transform || Pe(t, r, !0), n.pop()
                    }
                    if (i) {
                        for (; p;) {
                            for (g = p._next, f = m; f && f.pr > p.pr;) f = f._next;
                            (p._prev = f ? f._prev : d) ? p._prev._next = p: m = p, (p._next = f) ? f._prev = p : d = p, p = g
                        }
                        this._firstPT = m
                    }
                    return !0
                }, h.parse = function(t, e, i, n) {
                    var a, h, _, u, p, c, f, m, d, g, v = t.style;
                    for (a in e) c = e[a], h = o[a], h ? i = h.parse(t, c, a, this, i, n, e) : (p = W(t, a, r) + "", d = "string" == typeof c, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && b.test(c) ? (d || (c = oe(c), c = (c.length > 3 ? "rgba(" : "rgb(") + c.join(",") + ")"), i = ce(v, a, p, c, !0, "transparent", i, 0, n)) : !d || -1 === c.indexOf(" ") && -1 === c.indexOf(",") ? (_ = parseFloat(p), f = _ || 0 === _ ? p.substr((_ + "").length) : "", ("" === p || "auto" === p) && ("width" === a || "height" === a ? (_ = te(t, a, r), f = "px") : "left" === a || "top" === a ? (_ = Z(t, a, r), f = "px") : (_ = "opacity" !== a ? 0 : 1, f = "")), g = d && "=" === c.charAt(1), g ? (u = parseInt(c.charAt(0) + "1", 10), c = c.substr(2), u *= parseFloat(c), m = c.replace(y, "")) : (u = parseFloat(c), m = d ? c.substr((u + "").length) || "" : ""), "" === m && (m = a in s ? s[a] : f), c = u || 0 === u ? (g ? u + _ : u) + m : e[a], f !== m && "" !== m && (u || 0 === u) && _ && (_ = Q(t, a, _, f), "%" === m ? (_ /= Q(t, a, 100, "%") / 100, e.strictUnits !== !0 && (p = _ + "%")) : "em" === m ? _ /= Q(t, a, 1, "em") : "px" !== m && (u = Q(t, a, u, m), m = "px"), g && (u || 0 === u) && (c = u + _ + m)), g && (u += _), !_ && 0 !== _ || !u && 0 !== u ? void 0 !== v[a] && (c || "NaN" != c + "" && null != c) ? (i = new pe(v, a, u || _ || 0, 0, i, -1, a, !1, 0, p, c), i.xs0 = "none" !== c || "display" !== a && -1 === a.indexOf("Style") ? c : p) : j("invalid " + a + " tween value: " + e[a]) : (i = new pe(v, a, _, u - _, i, 0, a, l !== !1 && ("px" === m || "zIndex" === a), 0, p, c), i.xs0 = m)) : i = ce(v, a, p, c, !0, null, i, 0, n)), n && i && !i.plugin && (i.plugin = n);
                    return i
                }, h.setRatio = function(t) {
                    var e, i, s, r = this._firstPT,
                        n = 1e-6;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : n > e && e > -n && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (s = r.l, 2 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === s) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, s = 1; r.l > s; s++) i += r["xn" + s] + r["xs" + (s + 1)];
                                    r.t[r.p] = i
                                } else - 1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) 2 !== r.type ? r.t[r.p] = r.e : r.setRatio(t), r = r._next
                }, h._enableTransforms = function(t) {
                    this._transformType = t || 3 === this._transformType ? 3 : 2, this._transform = this._transform || Pe(this._target, r, !0)
                };
                var Me = function() {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var s = this._firstPT = new pe(t, e, 0, 0, this._firstPT, 2);
                    s.e = i, s.setRatio = Me, s.data = this
                }, h._linkCSSP = function(t, e, i, s) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, s = !0), i ? i._next = t : s || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._kill = function(e) {
                    var i, s, r, n = e;
                    if (e.autoAlpha || e.alpha) {
                        n = {};
                        for (s in e) n[s] = e[s];
                        n.opacity = 1, n.autoAlpha && (n.visibility = 1)
                    }
                    return e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), t.prototype._kill.call(this, n)
                };
                var ze = function(t, e, i) {
                    var s, r, n, a;
                    if (t.slice)
                        for (r = t.length; --r > -1;) ze(t[r], e, i);
                    else
                        for (s = t.childNodes, r = s.length; --r > -1;) n = s[r], a = n.type, n.style && (e.push($(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ze(n, e, i)
                };
                return a.cascadeTo = function(t, i, s) {
                    var r, n, a, o = e.to(t, i, s),
                        h = [o],
                        l = [],
                        _ = [],
                        u = [],
                        p = e._internals.reservedProps;
                    for (t = o._targets || o.target, ze(t, l, u), o.render(i, !0), ze(t, _), o.render(0, !0), o._enabled(!0), r = u.length; --r > -1;)
                        if (n = H(u[r], l[r], _[r]), n.firstMPT) {
                            n = n.difs;
                            for (a in s) p[a] && (n[a] = s[a]);
                            h.push(e.to(u[r], i, n))
                        } return h
                }, t.activate([a]), a
            }, !0),
            function() {
                var t = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }),
                    e = t.prototype;
                e._onInitAllProps = function() {
                    for (var t, e, i, s = this._tween, r = s.vars.roundProps instanceof Array ? s.vars.roundProps : s.vars.roundProps.split(","), n = r.length, a = {}, o = s._propLookup.roundProps; --n > -1;) a[r[n]] = 1;
                    for (n = r.length; --n > -1;)
                        for (t = r[n], e = s._firstPT; e;) i = e._next, e.pg ? e.t._roundProps(a, !0) : e.n === t && (this._add(e.t, t, e.s, e.c), i && (i._prev = e._prev), e._prev ? e._prev._next = i : s._firstPT === e && (s._firstPT = i), e._next = e._prev = null, s._propLookup[t] = o), e = i;
                    return !1
                }, e._add = function(t, e, i, s) {
                    this._addTween(t, e, i, i + s, e, !0), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.3.3",
                init: function(t, e) {
                    var i, s, r;
                    if ("function" != typeof t.setAttribute) return !1;
                    this._target = t, this._proxy = {}, this._start = {}, this._end = {};
                    for (i in e) this._start[i] = this._proxy[i] = s = t.getAttribute(i), r = this._addTween(this._proxy, i, parseFloat(s), e[i], i), this._end[i] = r ? r.s + r.c : e[i], this._overwriteProps.push(i);
                    return !0
                },
                set: function(t) {
                    this._super.setRatio.call(this, t);
                    for (var e, i = this._overwriteProps, s = i.length, r = 1 === t ? this._end : t ? this._proxy : this._start; --s > -1;) e = i[s], this._target.setAttribute(e, r[e] + "")
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.2.1",
                API: 2,
                init: function(t, e) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var i, s, r, n, a, o, h = e.useRadians === !0 ? 2 * Math.PI : 360,
                        l = 1e-6;
                    for (i in e) "useRadians" !== i && (o = (e[i] + "").split("_"), s = o[0], r = parseFloat("function" != typeof t[i] ? t[i] : t[i.indexOf("set") || "function" != typeof t["get" + i.substr(3)] ? i : "get" + i.substr(3)]()), n = this.finals[i] = "string" == typeof s && "=" === s.charAt(1) ? r + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, a = n - r, o.length && (s = o.join("_"), -1 !== s.indexOf("short") && (a %= h, a !== a % (h / 2) && (a = 0 > a ? a + h : a - h)), -1 !== s.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * h) % h - (0 | a / h) * h : -1 !== s.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * h) % h - (0 | a / h) * h)), (a > l || -l > a) && (this._addTween(t, i, r, r + a, i), this._overwriteProps.push(i)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, s, r = _gsScope.GreenSockGlobals || _gsScope,
                    n = r.com.greensock,
                    a = 2 * Math.PI,
                    o = Math.PI / 2,
                    h = n._class,
                    l = function(e, i) {
                        var s = h("easing." + e, function() {}, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, s
                    },
                    _ = t.register || function() {},
                    u = function(t, e, i, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new s
                        }, !0);
                        return _(r, t), r
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    c = function(e, i) {
                        var s = h("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = s.prototype = new t;
                        return r.constructor = s, r.getRatio = i, r.config = function(t) {
                            return new s(t)
                        }, s
                    },
                    f = u("Back", c("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), c("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), c("BackInOut", function(t) {
                        return 1 > (t *= 2) ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = i === !0
                    }, !0),
                    d = m.prototype = new t;
                return d.constructor = m, d.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return this._p1 > t ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), d.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = h("easing.SteppedEase", function(t) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + 1
                }, !0), d = e.prototype = new t, d.constructor = e, d.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), (this._p2 * t >> 0) * this._p1
                }, d.config = e.config = function(t) {
                    return new e(t)
                }, i = h("easing.RoughEase", function(e) {
                    e = e || {};
                    for (var i, s, r, n, a, o, h = e.taper || "none", l = [], _ = 0, u = 0 | (e.points || 20), c = u, f = e.randomize !== !1, m = e.clamp === !0, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1;) i = f ? Math.random() : 1 / u * c, s = d ? d.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (n = 1 - i, r = n * n * g) : "in" === h ? r = i * i * g : .5 > i ? (n = 2 * i, r = .5 * n * n * g) : (n = 2 * (1 - i), r = .5 * n * n * g), f ? s += Math.random() * r - .5 * r : c % 2 ? s += .5 * r : s -= .5 * r, m && (s > 1 ? s = 1 : 0 > s && (s = 0)), l[_++] = {
                        x: i,
                        y: s
                    };
                    for (l.sort(function(t, e) {
                            return t.x - e.x
                        }), o = new p(1, 1, null), c = u; --c > -1;) a = l[c], o = new p(a.x, a.y, o);
                    this._prev = new p(0, 0, 0 !== o.t ? o : o.next)
                }, !0), d = i.prototype = new t, d.constructor = i, d.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && e.t >= t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, d.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", l("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), l("BounceIn", function(t) {
                    return 1 / 2.75 > (t = 1 - t) ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), l("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", l("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), l("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), l("CircInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), s = function(e, i, s) {
                    var r = h("easing." + e, function(t, e) {
                            this._p1 = t || 1, this._p2 = e || s, this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0)
                        }, !0),
                        n = r.prototype = new t;
                    return n.constructor = r, n.getRatio = i, n.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", s("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .3), s("ElasticIn", function(t) {
                    return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2))
                }, .3), s("ElasticInOut", function(t) {
                    return 1 > (t *= 2) ? -.5 * this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) : .5 * this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * a / this._p2) + 1
                }, .45)), u("Expo", l("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), l("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), l("ExpoInOut", function(t) {
                    return 1 > (t *= 2) ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", l("SineOut", function(t) {
                    return Math.sin(t * o)
                }), l("SineIn", function(t) {
                    return -Math.cos(t * o) + 1
                }), l("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), h("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), _(r.SlowMo, "SlowMo", "ease,"), _(i, "RoughEase", "ease,"), _(e, "SteppedEase", "ease,"), f
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!i.TweenLite) {
            var s, r, n, a, o, h = function(t) {
                    var e, s = t.split("."),
                        r = i;
                    for (e = 0; s.length > e; e++) r[s[e]] = r = r[s[e]] || {};
                    return r
                },
                l = h("com.greensock"),
                _ = 1e-10,
                u = function(t) {
                    var e, i = [],
                        s = t.length;
                    for (e = 0; e !== s; i.push(t[e++]));
                    return i
                },
                p = function() {},
                c = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                f = {},
                m = function(s, r, n, a) {
                    this.sc = f[s] ? f[s].sc : [], f[s] = this, this.gsClass = null, this.func = n;
                    var o = [];
                    this.check = function(l) {
                        for (var _, u, p, c, d = r.length, g = d; --d > -1;)(_ = f[r[d]] || new m(r[d], [])).gsClass ? (o[d] = _.gsClass, g--) : l && _.sc.push(this);
                        if (0 === g && n)
                            for (u = ("com.greensock." + s).split("."), p = u.pop(), c = h(u.join("."))[p] = this.gsClass = n.apply(n, o), a && (i[p] = c, "function" == typeof define && define.amd ? define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + s.split(".").pop(), [], function() {
                                    return c
                                }) : s === e && "undefined" != typeof module && module.exports && (module.exports = c)), d = 0; this.sc.length > d; d++) this.sc[d].check()
                    }, this.check(!0)
                },
                d = t._gsDefine = function(t, e, i, s) {
                    return new m(t, e, i, s)
                },
                g = l._class = function(t, e, i) {
                    return e = e || function() {}, d(t, [], function() {
                        return e
                    }, i), e
                };
            d.globals = i;
            var v = [0, 0, 1, 1],
                y = [],
                T = g("easing.Ease", function(t, e, i, s) {
                    this._func = t, this._type = i || 0, this._power = s || 0, this._params = e ? v.concat(e) : v
                }, !0),
                w = T.map = {},
                x = T.register = function(t, e, i, s) {
                    for (var r, n, a, o, h = e.split(","), _ = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --_ > -1;)
                        for (n = h[_], r = s ? g("easing." + n, null, !0) : l.easing[n] || {}, a = u.length; --a > -1;) o = u[a], w[n + "." + o] = w[o + n] = r[o] = t.getRatio ? t : t[o] || new t
                };
            for (n = T.prototype, n._calcEnd = !1, n.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        s = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? s *= s : 2 === i ? s *= s * s : 3 === i ? s *= s * s * s : 4 === i && (s *= s * s * s * s), 1 === e ? 1 - s : 2 === e ? s : .5 > t ? s / 2 : 1 - s / 2
                }, s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], r = s.length; --r > -1;) n = s[r] + ",Power" + r, x(new T(null, null, 1, r), n, "easeOut", !0), x(new T(null, null, 2, r), n, "easeIn" + (0 === r ? ",easeNone" : "")), x(new T(null, null, 3, r), n, "easeInOut");
            w.linear = l.easing.Linear.easeIn, w.swing = l.easing.Quad.easeInOut;
            var b = g("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            n = b.prototype, n.addEventListener = function(t, e, i, s, r) {
                r = r || 0;
                var n, h, l = this._listeners[t],
                    _ = 0;
                for (null == l && (this._listeners[t] = l = []), h = l.length; --h > -1;) n = l[h], n.c === e && n.s === i ? l.splice(h, 1) : 0 === _ && r > n.pr && (_ = h + 1);
                l.splice(_, 0, {
                    c: e,
                    s: i,
                    up: s,
                    pr: r
                }), this !== a || o || a.wake()
            }, n.removeEventListener = function(t, e) {
                var i, s = this._listeners[t];
                if (s)
                    for (i = s.length; --i > -1;)
                        if (s[i].c === e) return s.splice(i, 1), void 0
            }, n.dispatchEvent = function(t) {
                var e, i, s, r = this._listeners[t];
                if (r)
                    for (e = r.length, i = this._eventTarget; --e > -1;) s = r[e], s.up ? s.c.call(s.s || i, {
                        type: t,
                        target: i
                    }) : s.c.call(s.s || i)
            };
            var P = t.requestAnimationFrame,
                S = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                R = k();
            for (s = ["ms", "moz", "webkit", "o"], r = s.length; --r > -1 && !P;) P = t[s[r] + "RequestAnimationFrame"], S = t[s[r] + "CancelAnimationFrame"] || t[s[r] + "CancelRequestAnimationFrame"];
            g("Ticker", function(t, e) {
                var i, s, r, n, h, l = this,
                    u = k(),
                    c = e !== !1 && P,
                    f = 500,
                    m = 33,
                    d = function(t) {
                        var e, a, o = k() - R;
                        o > f && (u += o - m), R += o, l.time = (R - u) / 1e3, e = l.time - h, (!i || e > 0 || t === !0) && (l.frame++, h += e + (e >= n ? .004 : n - e), a = !0), t !== !0 && (r = s(d)), a && l.dispatchEvent("tick")
                    };
                b.call(l), l.time = l.frame = 0, l.tick = function() {
                    d(!0)
                }, l.lagSmoothing = function(t, e) {
                    f = t || 1 / _, m = Math.min(e, f, 0)
                }, l.sleep = function() {
                    null != r && (c && S ? S(r) : clearTimeout(r), s = p, r = null, l === a && (o = !1))
                }, l.wake = function() {
                    null !== r ? l.sleep() : l.frame > 10 && (R = k() - f + 5), s = 0 === i ? p : c && P ? P : function(t) {
                        return setTimeout(t, 0 | 1e3 * (h - l.time) + 1)
                    }, l === a && (o = !0), d(2)
                }, l.fps = function(t) {
                    return arguments.length ? (i = t, n = 1 / (i || 60), h = this.time + n, l.wake(), void 0) : i
                }, l.useRAF = function(t) {
                    return arguments.length ? (l.sleep(), c = t, l.fps(i), void 0) : c
                }, l.fps(t), setTimeout(function() {
                    c && (!r || 5 > l.frame) && l.useRAF(!1)
                }, 1500)
            }), n = l.Ticker.prototype = new l.events.EventDispatcher, n.constructor = l.Ticker;
            var A = g("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = e.immediateRender === !0, this.data = e.data, this._reversed = e.reversed === !0, B) {
                    o || a.wake();
                    var i = this.vars.useFrames ? j : B;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            a = A.ticker = new l.Ticker, n = A.prototype, n._dirty = n._gc = n._initted = n._paused = !1, n._totalTime = n._time = 0, n._rawPrevTime = -1, n._next = n._last = n._onUpdate = n._timeline = n.timeline = null, n._paused = !1;
            var C = function() {
                o && k() - R > 2e3 && a.wake(), setTimeout(C, 2e3)
            };
            C(), n.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, n.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, n.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, n.seek = function(t, e) {
                return this.totalTime(Number(t), e !== !1)
            }, n.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
            }, n.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, n.render = function() {}, n.invalidate = function() {
                return this
            }, n.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && i + this.totalDuration() / this._timeScale > t
            }, n._enabled = function(t, e) {
                return o || a.wake(), this._gc = !t, this._active = this.isActive(), e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, n._kill = function() {
                return this._enabled(!1, !1)
            }, n.kill = function(t, e) {
                return this._kill(t, e), this
            }, n._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, n._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, n.eventCallback = function(t, e, i, s) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = c(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = s), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, n.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, n.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, n.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, n.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, n.totalTime = function(t, e, i) {
                if (o || a.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var s = this._totalDuration,
                            r = this._timeline;
                        if (t > s && !i && (t = s), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? s - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (this.render(t, e, !1), I.length && q())
                }
                return this
            }, n.progress = n.totalProgress = function(t, e) {
                return arguments.length ? this.totalTime(this.duration() * t, e) : this._time / this.duration()
            }, n.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, n.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || _, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, n.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, n.paused = function(t) {
                if (!arguments.length) return this._paused;
                if (t != this._paused && this._timeline) {
                    o || t || a.wake();
                    var e = this._timeline,
                        i = e.rawTime(),
                        s = i - this._pauseTime;
                    !t && e.smoothChildTiming && (this._startTime += s, this._uncache(!1)), this._pauseTime = t ? i : null, this._paused = t, this._active = this.isActive(), !t && 0 !== s && this._initted && this.duration() && this.render(e.smoothChildTiming ? this._totalTime : (i - this._startTime) / this._timeScale, !0, !0)
                }
                return this._gc && !t && this._enabled(!0, !1), this
            };
            var O = g("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            n = O.prototype = new A, n.constructor = O, n.kill()._gc = !1, n._first = n._last = null, n._sortChildren = !1, n.add = n.insert = function(t, e) {
                var i, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), i = this._last, this._sortChildren)
                    for (s = t._startTime; i && i._startTime > s;) i = i._prev;
                return i ? (t._next = i._next, i._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = i, this._timeline && this._uncache(!0), this
            }, n._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, this._timeline && this._uncache(!0)), this
            }, n.render = function(t, e, i) {
                var s, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) s = r._next, (r._active || t >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = s
            }, n.rawTime = function() {
                return o || a.wake(), this._totalTime
            };
            var D = g("TweenLite", function(e, i, s) {
                    if (A.call(this, i, s), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        h = this.vars.overwrite;
                    if (this._overwrite = h = null == h ? Y[D.defaultOverwrite] : "number" == typeof h ? h >> 0 : Y[h], (o || e instanceof Array || e.push && c(e)) && "number" != typeof e[0])
                        for (this._targets = a = u(e), this._propLookup = [], this._siblings = [], r = 0; a.length > r; r++) n = a[r], n ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(u(n))) : (this._siblings[r] = V(n, this, !1), 1 === h && this._siblings[r].length > 1 && G(n, this, null, 1, this._siblings[r])) : (n = a[r--] = D.selector(n), "string" == typeof n && a.splice(r + 1, 1)) : a.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = V(e, this, !1), 1 === h && this._siblings.length > 1 && G(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -_, this.render(-this._delay))
                }, !0),
                M = function(e) {
                    return e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                },
                z = function(t, e) {
                    var i, s = {};
                    for (i in t) U[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!F[i] || F[i] && F[i]._autoCSS) || (s[i] = t[i], delete t[i]);
                    t.css = s
                };
            n = D.prototype = new A, n.constructor = D, n.kill()._gc = !1, n.ratio = 0, n._firstPT = n._targets = n._overwrittenProps = n._startAt = null, n._notifyPluginsOfEnabled = n._lazy = !1, D.version = "1.13.1", D.defaultEase = n._ease = new T(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = a, D.autoSleep = !0, D.lagSmoothing = function(t, e) {
                a.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var I = [],
                E = {},
                L = D._internals = {
                    isArray: c,
                    isSelector: M,
                    lazyTweens: I
                },
                F = D._plugins = {},
                N = L.tweenLookup = {},
                X = 0,
                U = L.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1
                },
                Y = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    "true": 1,
                    "false": 0
                },
                j = A._rootFramesTimeline = new O,
                B = A._rootTimeline = new O,
                q = L.lazyRender = function() {
                    var t = I.length;
                    for (E = {}; --t > -1;) s = I[t], s && s._lazy !== !1 && (s.render(s._lazy, !1, !0), s._lazy = !1);
                    I.length = 0
                };
            B._startTime = a.time, j._startTime = a.frame, B._active = j._active = !0, setTimeout(q, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (I.length && q(), B.render((a.time - B._startTime) * B._timeScale, !1, !1), j.render((a.frame - j._startTime) * j._timeScale, !1, !1), I.length && q(), !(a.frame % 120)) {
                    for (i in N) {
                        for (e = N[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete N[i]
                    }
                    if (i = B._first, (!i || i._paused) && D.autoSleep && !j._first && 1 === a._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || a.sleep()
                    }
                }
            }, a.addEventListener("tick", A._updateRoot);
            var V = function(t, e, i) {
                    var s, r, n = t._gsTweenID;
                    if (N[n || (t._gsTweenID = n = "t" + X++)] || (N[n] = {
                            target: t,
                            tweens: []
                        }), e && (s = N[n].tweens, s[r = s.length] = e, i))
                        for (; --r > -1;) s[r] === e && s.splice(r, 1);
                    return N[n].tweens
                },
                G = function(t, e, i, s, r) {
                    var n, a, o, h;
                    if (1 === s || s >= 4) {
                        for (h = r.length, n = 0; h > n; n++)
                            if ((o = r[n]) !== e) o._gc || o._enabled(!1, !1) && (a = !0);
                            else if (5 === s) break;
                        return a
                    }
                    var l, u = e._startTime + _,
                        p = [],
                        c = 0,
                        f = 0 === e._duration;
                    for (n = r.length; --n > -1;)(o = r[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (l = l || W(e, 0, f), 0 === W(o, l, f) && (p[c++] = o)) : u >= o._startTime && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && 2e-10 >= u - o._startTime || (p[c++] = o)));
                    for (n = c; --n > -1;) o = p[n], 2 === s && o._kill(i, t) && (a = !0), (2 !== s || !o._firstPT && o._initted) && o._enabled(!1, !1) && (a = !0);
                    return a
                },
                W = function(t, e, i) {
                    for (var s = t._timeline, r = s._timeScale, n = t._startTime; s._timeline;) {
                        if (n += s._startTime, r *= s._timeScale, s._paused) return -100;
                        s = s._timeline
                    }
                    return n /= r, n > e ? n - e : i && n === e || !t._initted && 2 * _ > n - e ? _ : (n += t.totalDuration() / t._timeScale / r) > e + _ ? 0 : n - e - _
                };
            n._init = function() {
                var t, e, i, s, r, n = this.vars,
                    a = this._overwrittenProps,
                    o = this._duration,
                    h = !!n.immediateRender,
                    l = n.ease;
                if (n.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (s in n.startAt) r[s] = n.startAt[s];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && n.lazy !== !1, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== o) return
                } else if (n.runBackwards && 0 !== o)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        i = {};
                        for (s in n) U[s] && "autoCSS" !== s || (i[s] = n[s]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && n.lazy !== !1, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1)
                    } if (this._ease = l = l ? l instanceof T ? l : "function" == typeof l ? new T(l, n.easeParams) : w[l] || D.defaultEase : D.defaultEase, n.easeParams instanceof Array && l.config && (this._ease = l.config.apply(l, n.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (t = this._targets.length; --t > -1;) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), n.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = n.onUpdate, this._initted = !0
            }, n._initProps = function(e, i, s, r) {
                var n, a, o, h, l, _;
                if (null == e) return !1;
                E[e._gsTweenID] && q(), this.vars.css || e.style && e !== t && e.nodeType && F.css && this.vars.autoCSS !== !1 && z(this.vars, e);
                for (n in this.vars) {
                    if (_ = this.vars[n], U[n]) _ && (_ instanceof Array || _.push && c(_)) && -1 !== _.join("").indexOf("{self}") && (this.vars[n] = _ = this._swapSelfInParams(_, this));
                    else if (F[n] && (h = new F[n])._onInitTween(e, this.vars[n], this)) {
                        for (this._firstPT = l = {
                                _next: this._firstPT,
                                t: h,
                                p: "setRatio",
                                s: 0,
                                c: 1,
                                f: !0,
                                n: n,
                                pg: !0,
                                pr: h._priority
                            }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                        (h._priority || h._onInitAllProps) && (o = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0)
                    } else this._firstPT = i[n] = l = {
                        _next: this._firstPT,
                        t: e,
                        p: n,
                        f: "function" == typeof e[n],
                        n: n,
                        pg: !1,
                        pr: 0
                    }, l.s = l.f ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), l.c = "string" == typeof _ && "=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * Number(_.substr(2)) : Number(_) - l.s || 0;
                    l && l._next && (l._next._prev = l)
                }
                return r && this._kill(r, e) ? this._initProps(e, i, s, r) : this._overwrite > 1 && this._firstPT && s.length > 1 && G(e, this, i, this._overwrite, s) ? (this._kill(i, e), this._initProps(e, i, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (E[e._gsTweenID] = !0), o)
            }, n.render = function(t, e, i) {
                var s, r, n, a, o = this._time,
                    h = this._duration,
                    l = this._rawPrevTime;
                if (t >= h) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (s = !0, r = "onComplete"), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 === t || 0 > l || l === _) && l !== t && (i = !0, l > _ && (r = "onReverseComplete")), this._rawPrevTime = a = !e || t || l === t ? t : _);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === h && l > 0 && l !== _) && (r = "onReverseComplete", s = this._reversed), 0 > t ? (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (i = !0), this._rawPrevTime = a = !e || t || l === t ? t : _)) : this._initted || (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var u = t / h,
                        p = this._easeType,
                        c = this._easePower;
                    (1 === p || 3 === p && u >= .5) && (u = 1 - u), 3 === p && (u *= 2), 1 === c ? u *= u : 2 === c ? u *= u * u : 3 === c ? u *= u * u * u : 4 === c && (u *= u * u * u * u), this.ratio = 1 === p ? 1 - u : 2 === p ? u : .5 > t / h ? u / 2 : 1 - u / 2
                } else this.ratio = this._ease.getRatio(t / h);
                if (this._time !== o || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = l, I.push(this), this._lazy = t, void 0;
                        this._time && !s ? this.ratio = this._ease.getRatio(this._time / h) : s && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (this._lazy !== !1 && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === h) && (e || this.vars.onStart.apply(this.vars.onStartScope || this, this.vars.onStartParams || y))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
                    this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, i), e || (this._time !== o || s) && this._onUpdate.apply(this.vars.onUpdateScope || this, this.vars.onUpdateParams || y)), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this.vars[r].apply(this.vars[r + "Scope"] || this, this.vars[r + "Params"] || y), 0 === h && this._rawPrevTime === _ && a !== _ && (this._rawPrevTime = 0))
                }
            }, n._kill = function(t, e) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var i, s, r, n, a, o, h, l;
                if ((c(e) || M(e)) && "number" != typeof e[0])
                    for (i = e.length; --i > -1;) this._kill(t, e[i]) && (o = !0);
                else {
                    if (this._targets) {
                        for (i = this._targets.length; --i > -1;)
                            if (e === this._targets[i]) {
                                a = this._propLookup[i] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[i] = t ? this._overwrittenProps[i] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        h = t || a, l = t !== s && "all" !== s && t !== a && ("object" != typeof t || !t._tempKill);
                        for (r in h)(n = a[r]) && (n.pg && n.t._kill(h) && (o = !0), n.pg && 0 !== n.t._overwriteProps.length || (n._prev ? n._prev._next = n._next : n === this._firstPT && (this._firstPT = n._next), n._next && (n._next._prev = n._prev), n._next = n._prev = null), delete a[r]), l && (s[r] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return o
            }, n.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = null, this._overwrittenProps = null, this._onUpdate = null, this._startAt = null, this._initted = this._active = this._notifyPluginsOfEnabled = this._lazy = !1, this._propLookup = this._targets ? {} : [], this
            }, n._enabled = function(t, e) {
                if (o || a.wake(), t && this._gc) {
                    var i, s = this._targets;
                    if (s)
                        for (i = s.length; --i > -1;) this._siblings[i] = V(s[i], this, !0);
                    else this._siblings = V(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), this._notifyPluginsOfEnabled && this._firstPT ? D._onPluginEvent(t ? "_onEnable" : "_onDisable", this) : !1
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, s) {
                return s.startAt = i, s.immediateRender = 0 != s.immediateRender && 0 != i.immediateRender, new D(t, e, s)
            }, D.delayedCall = function(t, e, i, s, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    onCompleteScope: s,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    onReverseCompleteScope: s,
                    immediateRender: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, s, r, n;
                if ((c(t) || M(t)) && "number" != typeof t[0]) {
                    for (i = t.length, s = []; --i > -1;) s = s.concat(D.getTweensOf(t[i], e));
                    for (i = s.length; --i > -1;)
                        for (n = s[i], r = i; --r > -1;) n === s[r] && s.splice(i, 1)
                } else
                    for (s = V(t).concat(), i = s.length; --i > -1;)(s[i]._gc || e && !s[i].isActive()) && s.splice(i, 1);
                return s
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var s = D.getTweensOf(t, e), r = s.length; --r > -1;) s[r]._kill(i, t)
            };
            var Q = g("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = Q.prototype
            }, !0);
            if (n = Q.prototype, Q.version = "1.10.1", Q.API = 2, n._firstPT = null, n._addTween = function(t, e, i, s, r, n) {
                    var a, o;
                    return null != s && (a = "number" == typeof s || "=" !== s.charAt(1) ? Number(s) - i : parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2))) ? (this._firstPT = o = {
                        _next: this._firstPT,
                        t: t,
                        p: e,
                        s: i,
                        c: a,
                        f: "function" == typeof t[e],
                        n: r || e,
                        r: n
                    }, o._next && (o._next._prev = o), o) : void 0
                }, n.setRatio = function(t) {
                    for (var e, i = this._firstPT, s = 1e-6; i;) e = i.c * t + i.s, i.r ? e = Math.round(e) : s > e && e > -s && (e = 0), i.f ? i.t[i.p](e) : i.t[i.p] = e, i = i._next
                }, n._kill = function(t) {
                    var e, i = this._overwriteProps,
                        s = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; s;) null != t[s.n] && (s._next && (s._next._prev = s._prev), s._prev ? (s._prev._next = s._next, s._prev = null) : this._firstPT === s && (this._firstPT = s._next)), s = s._next;
                    return !1
                }, n._roundProps = function(t, e) {
                    for (var i = this._firstPT; i;)(t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && (i.r = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, s, r, n, a, o = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; o;) {
                            for (a = o._next, s = r; s && s.pr > o.pr;) s = s._next;
                            (o._prev = s ? s._prev : n) ? o._prev._next = o: r = o, (o._next = s) ? s._prev = o : n = o, o = a
                        }
                        o = e._firstPT = r
                    }
                    for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
                    return i
                }, Q.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === Q.API && (F[(new t[e])._propName] = t[e]);
                    return !0
                }, d.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        s = t.priority || 0,
                        r = t.overwriteProps,
                        n = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_roundProps",
                            initAll: "_onInitAllProps"
                        },
                        a = g("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            Q.call(this, i, s), this._overwriteProps = r || []
                        }, t.global === !0),
                        o = a.prototype = new Q(i);
                    o.constructor = a, a.API = t.API;
                    for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
                    return a.version = t.version, Q.activate([a]), a
                }, s = t._gsQueue) {
                for (r = 0; s.length > r; r++) s[r]();
                for (n in f) f[n].func || t.console.log("GSAP encountered missing dependency: com.greensock." + n)
            }
            o = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax");

/*!
 * VERSION: 1.7.4
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2014, GreenSock. All rights reserved.
 * This work is subject to the terms at http://www.greensock.com/terms_of_use.html or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var t = document.documentElement,
        e = window,
        i = function(i, s) {
            var r = "x" === s ? "Width" : "Height",
                n = "scroll" + r,
                o = "client" + r,
                a = document.body;
            return i === e || i === t || i === a ? Math.max(t[n], a[n]) - (e["inner" + r] || Math.max(t[o], a[o])) : i[n] - i["offset" + r]
        },
        s = _gsScope._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            version: "1.7.4",
            init: function(t, s, r) {
                return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof s && (s = {
                    y: s
                }), this.vars = s, this._autoKill = s.autoKill !== !1, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != s.x ? (this._addTween(this, "x", this.x, "max" === s.x ? i(t, "x") : s.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != s.y ? (this._addTween(this, "y", this.y, "max" === s.y ? i(t, "y") : s.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function(t) {
                this._super.setRatio.call(this, t);
                var s = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                    r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                    n = r - this.yPrev,
                    o = s - this.xPrev;
                this._autoKill && (!this.skipX && (o > 7 || -7 > o) && i(this._target, "x") > s && (this.skipX = !0), !this.skipY && (n > 7 || -7 > n) && i(this._target, "y") > r && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? s : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
        }),
        r = s.prototype;
    s.max = i, r.getX = function() {
        return this._wdw ? null != e.pageXOffset ? e.pageXOffset : null != t.scrollLeft ? t.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, r.getY = function() {
        return this._wdw ? null != e.pageYOffset ? e.pageYOffset : null != t.scrollTop ? t.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, r._kill = function(t) {
        return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
    }
}), _gsScope._gsDefine && _gsScope._gsQueue.pop()();
(function($) {
    (function(b) {
        if (typeof define === "function" && define.amd) {
            define(["jquery"], b)
        } else {
            b(jQuery)
        }
    }(function(g) {
        var e = {},
            f = Math.max,
            h = Math.min;
        e.c = {};
        e.c.d = g(document);
        e.c.t = function(a) {
            return a.originalEvent.touches.length - 1
        };
        e.o = function() {
            var a = this;
            this.o = null;
            this.$ = null;
            this.i = null;
            this.g = null;
            this.v = null;
            this.cv = null;
            this.x = 0;
            this.y = 0;
            this.w = 0;
            this.h = 0;
            this.$c = null;
            this.c = null;
            this.t = 0;
            this.isInit = false;
            this.fgColor = null;
            this.pColor = null;
            this.dH = null;
            this.cH = null;
            this.eH = null;
            this.rH = null;
            this.scale = 1;
            this.relative = false;
            this.relativeWidth = false;
            this.relativeHeight = false;
            this.$div = null;
            this.run = function() {
                var b = function(d, j) {
                    var k;
                    for (k in j) {
                        a.o[k] = j[k]
                    }
                    a._carve().init();
                    a._configure()._draw()
                };
                if (this.$.data("kontroled")) {
                    return
                }
                this.$.data("kontroled", true);
                this.extend();
                this.o = g.extend({
                    min: this.$.data("min") !== undefined ? this.$.data("min") : 0,
                    max: this.$.data("max") !== undefined ? this.$.data("max") : 100,
                    stopper: true,
                    readOnly: this.$.data("readonly") || (this.$.attr("readonly") === "readonly"),
                    cursor: this.$.data("cursor") === true && 30 || this.$.data("cursor") || 0,
                    thickness: this.$.data("thickness") && Math.max(Math.min(this.$.data("thickness"), 1), 0.01) || 0.35,
                    lineCap: this.$.data("linecap") || "butt",
                    width: this.$.data("width") || 200,
                    height: this.$.data("height") || 200,
                    displayInput: this.$.data("displayinput") == null || this.$.data("displayinput"),
                    displayPrevious: this.$.data("displayprevious"),
                    fgColor: this.$.data("fgcolor") || "#87CEEB",
                    inputColor: this.$.data("inputcolor"),
                    font: this.$.data("font") || "Arial",
                    fontWeight: this.$.data("font-weight") || "bold",
                    inline: false,
                    step: this.$.data("step") || 1,
                    rotation: this.$.data("rotation"),
                    draw: null,
                    change: null,
                    cancel: null,
                    release: null,
                    format: function(d) {
                        return d
                    },
                    parse: function(d) {
                        return parseFloat(d)
                    }
                }, this.o);
                this.o.flip = this.o.rotation === "anticlockwise" || this.o.rotation === "acw";
                if (!this.o.inputColor) {
                    this.o.inputColor = this.o.fgColor
                }
                if (this.$.is("fieldset")) {
                    this.v = {};
                    this.i = this.$.find("input");
                    this.i.each(function(j) {
                        var d = g(this);
                        a.i[j] = d;
                        a.v[j] = a.o.parse(d.val());
                        d.bind("change blur", function() {
                            var k = {};
                            k[j] = d.val();
                            a.val(k)
                        })
                    });
                    this.$.find("legend").remove()
                } else {
                    this.i = this.$;
                    this.v = this.o.parse(this.$.val());
                    this.v === "" && (this.v = this.o.min);
                    this.$.bind("change blur", function() {
                        a.val(a._validate(a.o.parse(a.$.val())))
                    })
                }!this.o.displayInput && this.$.hide();
                this.$c = g(document.createElement("canvas")).attr({
                    width: this.o.width,
                    height: this.o.height
                });
                this.$div = g('<div style="' + (this.o.inline ? "display:inline;" : "") + "width:" + this.o.width + "px;height:" + this.o.height + 'px;"></div>');
                this.$.wrap(this.$div).before(this.$c);
                this.$div = this.$.parent();
                if (typeof G_vmlCanvasManager !== "undefined") {
                    G_vmlCanvasManager.initElement(this.$c[0])
                }
                this.c = this.$c[0].getContext ? this.$c[0].getContext("2d") : null;
                if (!this.c) {
                    throw {
                        name: "CanvasNotSupportedException",
                        message: "Canvas not supported. Please use excanvas on IE8.0.",
                        toString: function() {
                            return this.name + ": " + this.message
                        }
                    }
                }
                this.scale = (window.devicePixelRatio || 1) / (this.c.webkitBackingStorePixelRatio || this.c.mozBackingStorePixelRatio || this.c.msBackingStorePixelRatio || this.c.oBackingStorePixelRatio || this.c.backingStorePixelRatio || 1);
                this.relativeWidth = this.o.width % 1 !== 0 && this.o.width.indexOf("%");
                this.relativeHeight = this.o.height % 1 !== 0 && this.o.height.indexOf("%");
                this.relative = this.relativeWidth || this.relativeHeight;
                this._carve();
                if (this.v instanceof Object) {
                    this.cv = {};
                    this.copy(this.v, this.cv)
                } else {
                    this.cv = this.v
                }
                this.$.bind("configure", b).parent().bind("configure", b);
                this._listen()._configure()._xy().init();
                this.isInit = true;
                this.$.val(this.o.format(this.v));
                this._draw();
                return this
            };
            this._carve = function() {
                if (this.relative) {
                    var d = this.relativeWidth ? this.$div.parent().width() * parseInt(this.o.width) / 100 : this.$div.parent().width(),
                        b = this.relativeHeight ? this.$div.parent().height() * parseInt(this.o.height) / 100 : this.$div.parent().height();
                    this.w = this.h = Math.min(d, b)
                } else {
                    this.w = this.o.width;
                    this.h = this.o.height
                }
                this.$div.css({
                    width: this.w + "px",
                    height: this.h + "px"
                });
                this.$c.attr({
                    width: this.w,
                    height: this.h
                });
                if (this.scale !== 1) {
                    this.$c[0].width = this.$c[0].width * this.scale;
                    this.$c[0].height = this.$c[0].height * this.scale;
                    this.$c.width(this.w);
                    this.$c.height(this.h)
                }
                return this
            };
            this._draw = function() {
                var b = true;
                a.g = a.c;
                a.clear();
                a.dH && (b = a.dH());
                b !== false && a.draw()
            };
            this._touch = function(d) {
                var b = function(j) {
                    var k = a.xy2val(j.originalEvent.touches[a.t].pageX, j.originalEvent.touches[a.t].pageY);
                    if (k == a.cv) {
                        return
                    }
                    if (a.cH && a.cH(k) === false) {
                        return
                    }
                    a.change(a._validate(k));
                    a._draw()
                };
                this.t = e.c.t(d);
                b(d);
                e.c.d.bind("touchmove.k", b).bind("touchend.k", function() {
                    e.c.d.unbind("touchmove.k touchend.k");
                    a.val(a.cv)
                });
                return this
            };
            this._mouse = function(b) {
                var d = function(j) {
                    var k = a.xy2val(j.pageX, j.pageY);
                    if (k == a.cv) {
                        return
                    }
                    if (a.cH && (a.cH(k) === false)) {
                        return
                    }
                    a.change(a._validate(k));
                    a._draw()
                };
                d(b);
                e.c.d.bind("mousemove.k", d).bind("keyup.k", function(j) {
                    if (j.keyCode === 27) {
                        e.c.d.unbind("mouseup.k mousemove.k keyup.k");
                        if (a.eH && a.eH() === false) {
                            return
                        }
                        a.cancel()
                    }
                }).bind("mouseup.k", function(j) {
                    e.c.d.unbind("mousemove.k mouseup.k keyup.k");
                    a.val(a.cv)
                });
                return this
            };
            this._xy = function() {
                var b = this.$c.offset();
                this.x = b.left;
                this.y = b.top;
                return this
            };
            this._listen = function() {
                if (!this.o.readOnly) {
                    this.$c.bind("mousedown", function(b) {
                        b.preventDefault();
                        a._xy()._mouse(b)
                    }).bind("touchstart", function(b) {
                        b.preventDefault();
                        a._xy()._touch(b)
                    });
                    this.listen()
                } else {
                    this.$.attr("readonly", "readonly")
                }
                if (this.relative) {
                    g(window).resize(function() {
                        a._carve().init();
                        a._draw()
                    })
                }
                return this
            };
            this._configure = function() {
                if (this.o.draw) {
                    this.dH = this.o.draw
                }
                if (this.o.change) {
                    this.cH = this.o.change
                }
                if (this.o.cancel) {
                    this.eH = this.o.cancel
                }
                if (this.o.release) {
                    this.rH = this.o.release
                }
                if (this.o.displayPrevious) {
                    this.pColor = this.h2rgba(this.o.fgColor, "0.4");
                    this.fgColor = this.h2rgba(this.o.fgColor, "0.6")
                } else {
                    this.fgColor = this.o.fgColor
                }
                return this
            };
            this._clear = function() {
                this.$c[0].width = this.$c[0].width
            };
            this._validate = function(b) {
                return (~~(((b < 0) ? -0.5 : 0.5) + (b / this.o.step))) * this.o.step
            };
            this.listen = function() {};
            this.extend = function() {};
            this.init = function() {};
            this.change = function(b) {};
            this.val = function(b) {};
            this.xy2val = function(d, b) {};
            this.draw = function() {};
            this.clear = function() {
                this._clear()
            };
            this.h2rgba = function(b, j) {
                var d;
                b = b.substring(1, 7);
                d = [parseInt(b.substring(0, 2), 16), parseInt(b.substring(2, 4), 16), parseInt(b.substring(4, 6), 16)];
                return "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + j + ")"
            };
            this.copy = function(b, d) {
                for (var k in b) {
                    d[k] = b[k]
                }
            }
        };
        e.Dial = function() {
            e.o.call(this);
            this.startAngle = null;
            this.xy = null;
            this.radius = null;
            this.lineWidth = null;
            this.cursorExt = null;
            this.w2 = null;
            this.PI2 = 2 * Math.PI;
            this.extend = function() {
                this.o = g.extend({
                    bgColor: this.$.data("bgcolor") || "#EEEEEE",
                    angleOffset: this.$.data("angleoffset") || 0,
                    angleArc: this.$.data("anglearc") || 360,
                    inline: true
                }, this.o)
            };
            this.val = function(b, a) {
                if (null != b) {
                    b = this.o.parse(b);
                    if (a !== false && b != this.v && this.rH && this.rH(b) === false) {
                        return
                    }
                    this.cv = this.o.stopper ? f(h(b, this.o.max), this.o.min) : b;
                    this.v = this.cv;
                    this.$.val(this.o.format(this.v));
                    this._draw()
                } else {
                    return this.v
                }
            };
            this.xy2val = function(j, a) {
                var d, b;
                d = Math.atan2(j - (this.x + this.w2), -(a - this.y - this.w2)) - this.angleOffset;
                if (this.o.flip) {
                    d = this.angleArc - d - this.PI2
                }
                if (this.angleArc != this.PI2 && (d < 0) && (d > -0.5)) {
                    d = 0
                } else {
                    if (d < 0) {
                        d += this.PI2
                    }
                }
                b = ~~(0.5 + (d * (this.o.max - this.o.min) / this.angleArc)) + this.o.min;
                this.o.stopper && (b = f(h(b, this.o.max), this.o.min));
                return b
            };
            this.listen = function() {};
            this.init = function() {
                if (this.v < this.o.min || this.v > this.o.max) {
                    this.v = this.o.min
                }
                this.$.val(this.v);
                this.w2 = this.w / 2;
                this.cursorExt = this.o.cursor / 100;
                this.xy = this.w2 * this.scale;
                this.lineWidth = this.xy * this.o.thickness;
                this.lineCap = this.o.lineCap;
                this.radius = this.xy - this.lineWidth / 2;
                this.o.angleOffset && (this.o.angleOffset = isNaN(this.o.angleOffset) ? 0 : this.o.angleOffset);
                this.o.angleArc && (this.o.angleArc = isNaN(this.o.angleArc) ? this.PI2 : this.o.angleArc);
                this.angleOffset = this.o.angleOffset * Math.PI / 180;
                this.angleArc = this.o.angleArc * Math.PI / 180;
                this.startAngle = 1.5 * Math.PI + this.angleOffset;
                this.endAngle = 1.5 * Math.PI + this.angleOffset + this.angleArc;
                var a = f(String(Math.abs(this.o.max)).length, String(Math.abs(this.o.min)).length, 2) + 2;
                this.o.displayInput && this.i.css({
                    width: ((this.w / 2 + 4) >> 0) + "px",
                    height: ((this.w / 3) >> 0) + "px",
                    position: "absolute",
                    "vertical-align": "middle",
                    "margin-top": ((this.w / 3) >> 0) + "px",
                    "margin-left": "-" + ((this.w * 3 / 4 + 2) >> 0) + "px",
                    border: 0,
                    background: "none",
                    font: this.o.fontWeight + " " + ((this.w / a) >> 0) + "px " + this.o.font,
                    "text-align": "center",
                    color: this.o.inputColor || this.o.fgColor,
                    padding: "0px",
                    "-webkit-appearance": "none"
                }) || this.i.css({
                    width: "0px",
                    visibility: "hidden"
                })
            };
            this.change = function(a) {
                this.cv = a;
                this.$.val(this.o.format(a))
            };
            this.angle = function(a) {
                return (a - this.o.min) * this.angleArc / (this.o.max - this.o.min)
            };
            this.arc = function(b) {
                var d, a;
                b = this.angle(b);
                if (this.o.flip) {
                    d = this.endAngle + 0.00001;
                    a = d - b - 0.00001
                } else {
                    d = this.startAngle - 0.00001;
                    a = d + b + 0.00001
                }
                this.o.cursor && (d = a - this.cursorExt) && (a = a + this.cursorExt);
                return {
                    s: d,
                    e: a,
                    d: this.o.flip && !this.o.cursor
                }
            };
            this.draw = function() {
                var a = this.g,
                    j = this.arc(this.cv),
                    d, b = 1;
                a.lineWidth = this.lineWidth;
                a.lineCap = this.lineCap;
                if (this.o.bgColor !== "none") {
                    a.beginPath();
                    a.strokeStyle = this.o.bgColor;
                    a.arc(this.xy, this.xy, this.radius, this.endAngle - 0.00001, this.startAngle + 0.00001, true);
                    a.stroke()
                }
                if (this.o.displayPrevious) {
                    d = this.arc(this.v);
                    a.beginPath();
                    a.strokeStyle = this.pColor;
                    a.arc(this.xy, this.xy, this.radius, d.s, d.e, d.d);
                    a.stroke();
                    b = this.cv == this.v
                }
                a.beginPath();
                a.strokeStyle = b ? this.o.fgColor : this.fgColor;
                a.arc(this.xy, this.xy, this.radius, j.s, j.e, j.d);
                a.stroke()
            };
            this.cancel = function() {
                this.val(this.v)
            }
        };
        g.fn.dial = g.fn.knob = function(a) {
            return this.each(function() {
                var b = new e.Dial();
                b.o = a;
                b.$ = g(this);
                b.run()
            }).parent()
        }
    }));
    ! function(a) {
        var d = {},
            b = {
                mode: "horizontal",
                slideSelector: "",
                infiniteLoop: !0,
                hideControlOnEnd: !1,
                speed: 500,
                easing: null,
                slideMargin: 0,
                startSlide: 0,
                randomStart: !1,
                captions: !1,
                ticker: !1,
                tickerHover: !1,
                adaptiveHeight: !1,
                adaptiveHeightSpeed: 500,
                video: !1,
                useCSS: !0,
                preloadImages: "visible",
                responsive: !0,
                slideZIndex: 50,
                touchEnabled: !0,
                swipeThreshold: 50,
                oneToOneTouch: !0,
                preventDefaultSwipeX: !0,
                preventDefaultSwipeY: !1,
                pager: !0,
                pagerType: "full",
                pagerShortSeparator: " / ",
                pagerSelector: null,
                buildPager: null,
                pagerCustom: null,
                controls: !0,
                nextText: "Next",
                prevText: "Prev",
                nextSelector: null,
                prevSelector: null,
                autoControls: !1,
                startText: "Start",
                stopText: "Stop",
                autoControlsCombine: !1,
                autoControlsSelector: null,
                auto: !1,
                pause: 4000,
                autoStart: !0,
                autoDirection: "next",
                autoHover: !1,
                autoDelay: 0,
                minSlides: 1,
                maxSlides: 1,
                moveSlides: 0,
                slideWidth: 0,
                onSliderLoad: function() {},
                onSlideBefore: function() {},
                onSlideAfter: function() {},
                onSlideNext: function() {},
                onSlidePrev: function() {},
                onSliderResize: function() {}
            };
        a.fn.bxSlider = function(aq) {
            if (0 == this.length) {
                return this
            }
            if (this.length > 1) {
                return this.each(function() {
                    a(this).bxSlider(aq)
                }), this
            }
            var ap = {},
                am = this;
            d.el = this;
            var aB = a(window).width(),
                at = a(window).height(),
                ay = function() {
                    ap.settings = a.extend({}, b, aq), ap.settings.slideWidth = parseInt(ap.settings.slideWidth), ap.children = am.children(ap.settings.slideSelector), ap.children.length < ap.settings.minSlides && (ap.settings.minSlides = ap.children.length), ap.children.length < ap.settings.maxSlides && (ap.settings.maxSlides = ap.children.length), ap.settings.randomStart && (ap.settings.startSlide = Math.floor(Math.random() * ap.children.length)), ap.active = {
                        index: ap.settings.startSlide
                    }, ap.carousel = ap.settings.minSlides > 1 || ap.settings.maxSlides > 1, ap.carousel && (ap.settings.preloadImages = "all"), ap.minThreshold = ap.settings.minSlides * ap.settings.slideWidth + (ap.settings.minSlides - 1) * ap.settings.slideMargin, ap.maxThreshold = ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin, ap.working = !1, ap.controls = {}, ap.interval = null, ap.animProp = "vertical" == ap.settings.mode ? "top" : "left", ap.usingCSS = ap.settings.useCSS && "fade" != ap.settings.mode && function() {
                        var g = document.createElement("div"),
                            h = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                        for (var f in h) {
                            if (void 0 !== g.style[h[f]]) {
                                return ap.cssPrefix = h[f].replace("Perspective", "").toLowerCase(), ap.animProp = "-" + ap.cssPrefix + "-transform", !0
                            }
                        }
                        return !1
                    }(), "vertical" == ap.settings.mode && (ap.settings.maxSlides = ap.settings.minSlides), am.data("origStyle", am.attr("style")), am.children(ap.settings.slideSelector).each(function() {
                        a(this).data("origStyle", a(this).attr("style"))
                    }), az()
                },
                az = function() {
                    am.wrap('<div class="bx-wrapper"><div class="bx-viewport"></div></div>'), ap.viewport = am.parent(), ap.loader = a('<div class="bx-loading" />'), ap.viewport.prepend(ap.loader), am.css({
                        width: "horizontal" == ap.settings.mode ? 100 * ap.children.length + 215 + "%" : "auto",
                        position: "relative"
                    }), ap.usingCSS && ap.settings.easing ? am.css("-" + ap.cssPrefix + "-transition-timing-function", ap.settings.easing) : ap.settings.easing || (ap.settings.easing = "swing"), ax(), ap.viewport.css({
                        width: "100%",
                        overflow: "hidden",
                        position: "relative"
                    }), ap.viewport.parent().css({
                        maxWidth: ao()
                    }), ap.settings.pager || ap.viewport.parent().css({
                        margin: "0 auto 0px"
                    }), ap.children.css({
                        "float": "horizontal" == ap.settings.mode ? "left" : "none",
                        listStyle: "none",
                        position: "relative"
                    }), ap.children.css("width", al()), "horizontal" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginRight", ap.settings.slideMargin), "vertical" == ap.settings.mode && ap.settings.slideMargin > 0 && ap.children.css("marginBottom", ap.settings.slideMargin), "fade" == ap.settings.mode && (ap.children.css({
                        position: "absolute",
                        zIndex: 0,
                        display: "none"
                    }), ap.children.eq(ap.settings.startSlide).css({
                        zIndex: ap.settings.slideZIndex,
                        display: "block"
                    })), ap.controls.el = a('<div class="bx-controls" />'), ap.settings.captions && J(), ap.active.last = ap.settings.startSlide == ai() - 1, ap.settings.video && am.fitVids();
                    var f = ap.children.eq(ap.settings.startSlide);
                    "all" == ap.settings.preloadImages && (f = ap.children), ap.settings.ticker ? ap.settings.pager = !1 : (ap.settings.pager && F(), ap.settings.controls && ae(), ap.settings.auto && ap.settings.autoControls && ac(), (ap.settings.controls || ap.settings.autoControls || ap.settings.pager) && ap.viewport.after(ap.controls.el)), aw(f, av)
                },
                aw = function(h, f) {
                    var g = h.find("img, iframe").length;
                    if (0 == g) {
                        return f(), void 0
                    }
                    var k = 0;
                    h.find("img, iframe").each(function() {
                        a(this).one("load", function() {
                            ++k == g && f()
                        }).each(function() {
                            this.complete && a(this).load()
                        })
                    })
                },
                av = function() {
                    if (ap.settings.infiniteLoop && "fade" != ap.settings.mode && !ap.settings.ticker) {
                        var h = "vertical" == ap.settings.mode ? ap.settings.minSlides : ap.settings.maxSlides,
                            f = ap.children.slice(0, h).clone().addClass("bx-clone"),
                            g = ap.children.slice(-h).clone().addClass("bx-clone");
                        am.append(f).prepend(g)
                    }
                    ap.loader.remove(), G(), "vertical" == ap.settings.mode && (ap.settings.adaptiveHeight = !0), ap.viewport.height(ak()), am.redrawSlider(), ap.settings.onSliderLoad(ap.active.index), ap.initialized = !0, ap.settings.responsive && a(window).bind("resize", e), ap.settings.auto && ap.settings.autoStart && ab(), ap.settings.ticker && U(), ap.settings.pager && an(ap.settings.startSlide), ap.settings.controls && t(), ap.settings.touchEnabled && !ap.settings.ticker && K()
                },
                ak = function() {
                    var g = 0,
                        f = a();
                    if ("vertical" == ap.settings.mode || ap.settings.adaptiveHeight) {
                        if (ap.carousel) {
                            var h = 1 == ap.settings.moveSlides ? ap.active.index : ap.active.index * ar();
                            for (f = ap.children.eq(h), i = 1; i <= ap.settings.maxSlides - 1; i++) {
                                f = h + i >= ap.children.length ? f.add(ap.children.eq(i - 1)) : f.add(ap.children.eq(h + i))
                            }
                        } else {
                            f = ap.children.eq(ap.active.index)
                        }
                    } else {
                        f = ap.children
                    }
                    return "vertical" == ap.settings.mode ? (f.each(function() {
                        g += a(this).outerHeight()
                    }), ap.settings.slideMargin > 0 && (g += ap.settings.slideMargin * (ap.settings.minSlides - 1))) : g = Math.max.apply(Math, f.map(function() {
                        return a(this).outerHeight(!1)
                    }).get()), g
                },
                ao = function() {
                    var f = "100%";
                    return ap.settings.slideWidth > 0 && (f = "horizontal" == ap.settings.mode ? ap.settings.maxSlides * ap.settings.slideWidth + (ap.settings.maxSlides - 1) * ap.settings.slideMargin : ap.settings.slideWidth), f
                },
                al = function() {
                    var f = ap.settings.slideWidth,
                        g = ap.viewport.width();
                    return 0 == ap.settings.slideWidth || ap.settings.slideWidth > g && !ap.carousel || "vertical" == ap.settings.mode ? f = g : ap.settings.maxSlides > 1 && "horizontal" == ap.settings.mode && (g > ap.maxThreshold || g < ap.minThreshold && (f = (g - ap.settings.slideMargin * (ap.settings.minSlides - 1)) / ap.settings.minSlides)), f
                },
                ax = function() {
                    var f = 1;
                    if ("horizontal" == ap.settings.mode && ap.settings.slideWidth > 0) {
                        if (ap.viewport.width() < ap.minThreshold) {
                            f = ap.settings.minSlides
                        } else {
                            if (ap.viewport.width() > ap.maxThreshold) {
                                f = ap.settings.maxSlides
                            } else {
                                var g = ap.children.first().width();
                                f = Math.floor(ap.viewport.width() / g)
                            }
                        }
                    } else {
                        "vertical" == ap.settings.mode && (f = ap.settings.minSlides)
                    }
                    return f
                },
                ai = function() {
                    var g = 0;
                    if (ap.settings.moveSlides > 0) {
                        if (ap.settings.infiniteLoop) {
                            g = ap.children.length / ar()
                        } else {
                            for (var h = 0, f = 0; h < ap.children.length;) {
                                ++g, h = f + ax(), f += ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
                            }
                        }
                    } else {
                        g = Math.ceil(ap.children.length / ax())
                    }
                    return g
                },
                ar = function() {
                    return ap.settings.moveSlides > 0 && ap.settings.moveSlides <= ax() ? ap.settings.moveSlides : ax()
                },
                G = function() {
                    if (ap.children.length > ap.settings.maxSlides && ap.active.last && !ap.settings.infiniteLoop) {
                        if ("horizontal" == ap.settings.mode) {
                            var g = ap.children.last(),
                                h = g.position();
                            aA(-(h.left - (ap.viewport.width() - g.width())), "reset", 0)
                        } else {
                            if ("vertical" == ap.settings.mode) {
                                var f = ap.children.length - ap.settings.minSlides,
                                    h = ap.children.eq(f).position();
                                aA(-h.top, "reset", 0)
                            }
                        }
                    } else {
                        var h = ap.children.eq(ap.active.index * ar()).position();
                        ap.active.index == ai() - 1 && (ap.active.last = !0), void 0 != h && ("horizontal" == ap.settings.mode ? aA(-h.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-h.top, "reset", 0))
                    }
                },
                aA = function(h, l, g, k) {
                    if (ap.usingCSS) {
                        var m = "vertical" == ap.settings.mode ? "translate3d(0, " + h + "px, 0)" : "translate3d(" + h + "px, 0, 0)";
                        am.css("-" + ap.cssPrefix + "-transition-duration", g / 1000 + "s"), "slide" == l ? (am.css(ap.animProp, m), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), ad()
                        })) : "reset" == l ? am.css(ap.animProp, m) : "ticker" == l && (am.css("-" + ap.cssPrefix + "-transition-timing-function", "linear"), am.css(ap.animProp, m), am.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
                            am.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), aA(k.resetValue, "reset", 0), Q()
                        }))
                    } else {
                        var f = {};
                        f[ap.animProp] = h, "slide" == l ? am.animate(f, g, ap.settings.easing, function() {
                            ad()
                        }) : "reset" == l ? am.css(ap.animProp, h) : "ticker" == l && am.animate(f, speed, "linear", function() {
                            aA(k.resetValue, "reset", 0), Q()
                        })
                    }
                },
                aj = function() {
                    for (var h = "", f = ai(), g = 0; f > g; g++) {
                        var k = "";
                        ap.settings.buildPager && a.isFunction(ap.settings.buildPager) ? (k = ap.settings.buildPager(g), ap.pagerEl.addClass("bx-custom-pager")) : (k = g + 1, ap.pagerEl.addClass("bx-default-pager")), h += '<div class="bx-pager-item"><a href="" data-slide-index="' + g + '" class="bx-pager-link">' + k + "</a></div>"
                    }
                    ap.pagerEl.html(h)
                },
                F = function() {
                    ap.settings.pagerCustom ? ap.pagerEl = a(ap.settings.pagerCustom) : (ap.pagerEl = a('<div class="bx-pager" />'), ap.settings.pagerSelector ? a(ap.settings.pagerSelector).html(ap.pagerEl) : ap.controls.el.addClass("bx-has-pager").append(ap.pagerEl), aj()), ap.pagerEl.on("click", "a", aa)
                },
                ae = function() {
                    ap.controls.next = a('<a class="bx-next" href="">' + ap.settings.nextText + "</a>"), ap.controls.prev = a('<a class="bx-prev" href="">' + ap.settings.prevText + "</a>"), ap.controls.next.bind("click", ah), ap.controls.prev.bind("click", ag), ap.settings.nextSelector && a(ap.settings.nextSelector).append(ap.controls.next), ap.settings.prevSelector && a(ap.settings.prevSelector).append(ap.controls.prev), ap.settings.nextSelector || ap.settings.prevSelector || (ap.controls.directionEl = a('<div class="bx-controls-direction" />'), ap.controls.directionEl.append(ap.controls.prev).append(ap.controls.next), ap.controls.el.addClass("bx-has-controls-direction").append(ap.controls.directionEl))
                },
                ac = function() {
                    ap.controls.start = a('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + ap.settings.startText + "</a></div>"), ap.controls.stop = a('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + ap.settings.stopText + "</a></div>"), ap.controls.autoEl = a('<div class="bx-controls-auto" />'), ap.controls.autoEl.on("click", ".bx-start", au), ap.controls.autoEl.on("click", ".bx-stop", R), ap.settings.autoControlsCombine ? ap.controls.autoEl.append(ap.controls.start) : ap.controls.autoEl.append(ap.controls.start).append(ap.controls.stop), ap.settings.autoControlsSelector ? a(ap.settings.autoControlsSelector).html(ap.controls.autoEl) : ap.controls.el.addClass("bx-has-controls-auto").append(ap.controls.autoEl), af(ap.settings.autoStart ? "stop" : "start")
                },
                J = function() {
                    ap.children.each(function() {
                        var f = a(this).find("img:first").attr("title");
                        void 0 != f && ("" + f).length && a(this).append('<div class="bx-caption"><span>' + f + "</span></div>")
                    })
                },
                ah = function(f) {
                    ap.settings.auto && am.stopAuto(), am.goToNextSlide(), f.preventDefault()
                },
                ag = function(f) {
                    ap.settings.auto && am.stopAuto(), am.goToPrevSlide(), f.preventDefault()
                },
                au = function(f) {
                    am.startAuto(), f.preventDefault()
                },
                R = function(f) {
                    am.stopAuto(), f.preventDefault()
                },
                aa = function(h) {
                    ap.settings.auto && am.stopAuto();
                    var f = a(h.currentTarget),
                        g = parseInt(f.attr("data-slide-index"));
                    g != ap.active.index && am.goToSlide(g), h.preventDefault()
                },
                an = function(g) {
                    var f = ap.children.length;
                    return "short" == ap.settings.pagerType ? (ap.settings.maxSlides > 1 && (f = Math.ceil(ap.children.length / ap.settings.maxSlides)), ap.pagerEl.html(g + 1 + ap.settings.pagerShortSeparator + f), void 0) : (ap.pagerEl.find("a").removeClass("active"), ap.pagerEl.each(function(h, k) {
                        a(k).find("a").eq(g).addClass("active")
                    }), void 0)
                },
                ad = function() {
                    if (ap.settings.infiniteLoop) {
                        var f = "";
                        0 == ap.active.index ? f = ap.children.eq(0).position() : ap.active.index == ai() - 1 && ap.carousel ? f = ap.children.eq((ai() - 1) * ar()).position() : ap.active.index == ap.children.length - 1 && (f = ap.children.eq(ap.children.length - 1).position()), f && ("horizontal" == ap.settings.mode ? aA(-f.left, "reset", 0) : "vertical" == ap.settings.mode && aA(-f.top, "reset", 0))
                    }
                    ap.working = !1, ap.settings.onSlideAfter(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index)
                },
                af = function(f) {
                    ap.settings.autoControlsCombine ? ap.controls.autoEl.html(ap.controls[f]) : (ap.controls.autoEl.find("a").removeClass("active"), ap.controls.autoEl.find("a:not(.bx-" + f + ")").addClass("active"))
                },
                t = function() {
                    1 == ai() ? (ap.controls.prev.addClass("disabled"), ap.controls.next.addClass("disabled")) : !ap.settings.infiniteLoop && ap.settings.hideControlOnEnd && (0 == ap.active.index ? (ap.controls.prev.addClass("disabled"), ap.controls.next.removeClass("disabled")) : ap.active.index == ai() - 1 ? (ap.controls.next.addClass("disabled"), ap.controls.prev.removeClass("disabled")) : (ap.controls.prev.removeClass("disabled"), ap.controls.next.removeClass("disabled")))
                },
                ab = function() {
                    ap.settings.autoDelay > 0 ? setTimeout(am.startAuto, ap.settings.autoDelay) : am.startAuto(), ap.settings.autoHover && am.hover(function() {
                        ap.interval && (am.stopAuto(!0), ap.autoPaused = !0)
                    }, function() {
                        ap.autoPaused && (am.startAuto(!0), ap.autoPaused = null)
                    })
                },
                U = function() {
                    var g = 0;
                    if ("next" == ap.settings.autoDirection) {
                        am.append(ap.children.clone().addClass("bx-clone"))
                    } else {
                        am.prepend(ap.children.clone().addClass("bx-clone"));
                        var f = ap.children.first().position();
                        g = "horizontal" == ap.settings.mode ? -f.left : -f.top
                    }
                    aA(g, "reset", 0), ap.settings.pager = !1, ap.settings.controls = !1, ap.settings.autoControls = !1, ap.settings.tickerHover && !ap.usingCSS && ap.viewport.hover(function() {
                        am.stop()
                    }, function() {
                        var l = 0;
                        ap.children.each(function() {
                            l += "horizontal" == ap.settings.mode ? a(this).outerWidth(!0) : a(this).outerHeight(!0)
                        });
                        var h = ap.settings.speed / l,
                            k = "horizontal" == ap.settings.mode ? "left" : "top",
                            m = h * (l - Math.abs(parseInt(am.css(k))));
                        Q(m)
                    }), Q()
                },
                Q = function(h) {
                    speed = h ? h : ap.settings.speed;
                    var l = {
                            left: 0,
                            top: 0
                        },
                        g = {
                            left: 0,
                            top: 0
                        };
                    "next" == ap.settings.autoDirection ? l = am.find(".bx-clone").first().position() : g = ap.children.first().position();
                    var k = "horizontal" == ap.settings.mode ? -l.left : -l.top,
                        m = "horizontal" == ap.settings.mode ? -g.left : -g.top,
                        f = {
                            resetValue: m
                        };
                    aA(k, "ticker", speed, f)
                },
                K = function() {
                    ap.touch = {
                        start: {
                            x: 0,
                            y: 0
                        },
                        end: {
                            x: 0,
                            y: 0
                        }
                    }, ap.viewport.bind("touchstart", s)
                },
                s = function(f) {
                    if (ap.working) {
                        f.preventDefault()
                    } else {
                        ap.touch.originalPos = am.position();
                        var g = f.originalEvent;
                        ap.touch.start.x = g.changedTouches[0].pageX, ap.touch.start.y = g.changedTouches[0].pageY, ap.viewport.bind("touchmove", j), ap.viewport.bind("touchend", B)
                    }
                },
                j = function(g) {
                    var l = g.originalEvent,
                        f = Math.abs(l.changedTouches[0].pageX - ap.touch.start.x),
                        h = Math.abs(l.changedTouches[0].pageY - ap.touch.start.y);
                    if (3 * f > h && ap.settings.preventDefaultSwipeX ? g.preventDefault() : 3 * h > f && ap.settings.preventDefaultSwipeY && g.preventDefault(), "fade" != ap.settings.mode && ap.settings.oneToOneTouch) {
                        var m = 0;
                        if ("horizontal" == ap.settings.mode) {
                            var k = l.changedTouches[0].pageX - ap.touch.start.x;
                            m = ap.touch.originalPos.left + k
                        } else {
                            var k = l.changedTouches[0].pageY - ap.touch.start.y;
                            m = ap.touch.originalPos.top + k
                        }
                        aA(m, "reset", 0)
                    }
                },
                B = function(g) {
                    ap.viewport.unbind("touchmove", j);
                    var k = g.originalEvent,
                        f = 0;
                    if (ap.touch.end.x = k.changedTouches[0].pageX, ap.touch.end.y = k.changedTouches[0].pageY, "fade" == ap.settings.mode) {
                        var h = Math.abs(ap.touch.start.x - ap.touch.end.x);
                        h >= ap.settings.swipeThreshold && (ap.touch.start.x > ap.touch.end.x ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto())
                    } else {
                        var h = 0;
                        "horizontal" == ap.settings.mode ? (h = ap.touch.end.x - ap.touch.start.x, f = ap.touch.originalPos.left) : (h = ap.touch.end.y - ap.touch.start.y, f = ap.touch.originalPos.top), !ap.settings.infiniteLoop && (0 == ap.active.index && h > 0 || ap.active.last && 0 > h) ? aA(f, "reset", 200) : Math.abs(h) >= ap.settings.swipeThreshold ? (0 > h ? am.goToNextSlide() : am.goToPrevSlide(), am.stopAuto()) : aA(f, "reset", 200)
                    }
                    ap.viewport.unbind("touchend", B)
                },
                e = function() {
                    var g = a(window).width(),
                        f = a(window).height();
                    (aB != g || at != f) && (aB = g, at = f, am.redrawSlider(), ap.settings.onSliderResize.call(am, ap.active.index))
                };
            return am.goToSlide = function(o, k) {
                if (!ap.working && ap.active.index != o) {
                    if (ap.working = !0, ap.oldIndex = ap.active.index, ap.active.index = 0 > o ? ai() - 1 : o >= ai() ? 0 : o, ap.settings.onSlideBefore(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), "next" == k ? ap.settings.onSlideNext(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index) : "prev" == k && ap.settings.onSlidePrev(ap.children.eq(ap.active.index), ap.oldIndex, ap.active.index), ap.active.last = ap.active.index >= ai() - 1, ap.settings.pager && an(ap.active.index), ap.settings.controls && t(), "fade" == ap.settings.mode) {
                        ap.settings.adaptiveHeight && ap.viewport.height() != ak() && ap.viewport.animate({
                            height: ak()
                        }, ap.settings.adaptiveHeightSpeed), ap.children.filter(":visible").fadeOut(ap.settings.speed).css({
                            zIndex: 0
                        }), ap.children.eq(ap.active.index).css("zIndex", ap.settings.slideZIndex + 1).fadeIn(ap.settings.speed, function() {
                            a(this).css("zIndex", ap.settings.slideZIndex), ad()
                        })
                    } else {
                        ap.settings.adaptiveHeight && ap.viewport.height() != ak() && ap.viewport.animate({
                            height: ak()
                        }, ap.settings.adaptiveHeightSpeed);
                        var u = 0,
                            f = {
                                left: 0,
                                top: 0
                            };
                        if (!ap.settings.infiniteLoop && ap.carousel && ap.active.last) {
                            if ("horizontal" == ap.settings.mode) {
                                var r = ap.children.eq(ap.children.length - 1);
                                f = r.position(), u = ap.viewport.width() - r.outerWidth()
                            } else {
                                var h = ap.children.length - ap.settings.minSlides;
                                f = ap.children.eq(h).position()
                            }
                        } else {
                            if (ap.carousel && ap.active.last && "prev" == k) {
                                var p = 1 == ap.settings.moveSlides ? ap.settings.maxSlides - ar() : (ai() - 1) * ar() - (ap.children.length - ap.settings.maxSlides),
                                    r = am.children(".bx-clone").eq(p);
                                f = r.position()
                            } else {
                                if ("next" == k && 0 == ap.active.index) {
                                    f = am.find("> .bx-clone").eq(ap.settings.maxSlides).position(), ap.active.last = !1
                                } else {
                                    if (o >= 0) {
                                        var q = o * ar();
                                        f = ap.children.eq(q).position()
                                    }
                                }
                            }
                        }
                        if ("undefined" != typeof f) {
                            var m = "horizontal" == ap.settings.mode ? -(f.left - u) : -f.top;
                            aA(m, "slide", ap.settings.speed)
                        }
                    }
                }
            }, am.goToNextSlide = function() {
                if (ap.settings.infiniteLoop || !ap.active.last) {
                    var f = parseInt(ap.active.index) + 1;
                    am.goToSlide(f, "next")
                }
            }, am.goToPrevSlide = function() {
                if (ap.settings.infiniteLoop || 0 != ap.active.index) {
                    var f = parseInt(ap.active.index) - 1;
                    am.goToSlide(f, "prev")
                }
            }, am.startAuto = function(f) {
                ap.interval || (ap.interval = setInterval(function() {
                    "next" == ap.settings.autoDirection ? am.goToNextSlide() : am.goToPrevSlide()
                }, ap.settings.pause), ap.settings.autoControls && 1 != f && af("stop"))
            }, am.stopAuto = function(f) {
                ap.interval && (clearInterval(ap.interval), ap.interval = null, ap.settings.autoControls && 1 != f && af("start"))
            }, am.getCurrentSlide = function() {
                return ap.active.index
            }, am.getCurrentSlideElement = function() {
                return ap.children.eq(ap.active.index)
            }, am.getSlideCount = function() {
                return ap.children.length
            }, am.redrawSlider = function() {
                ap.children.add(am.find(".bx-clone")).outerWidth(al()), ap.viewport.css("height", ak()), ap.settings.ticker || G(), ap.active.last && (ap.active.index = ai() - 1), ap.active.index >= ai() && (ap.active.last = !0), ap.settings.pager && !ap.settings.pagerCustom && (aj(), an(ap.active.index))
            }, am.destroySlider = function() {
                ap.initialized && (ap.initialized = !1, a(".bx-clone", this).remove(), ap.children.each(function() {
                    void 0 != a(this).data("origStyle") ? a(this).attr("style", a(this).data("origStyle")) : a(this).removeAttr("style")
                }), void 0 != a(this).data("origStyle") ? this.attr("style", a(this).data("origStyle")) : a(this).removeAttr("style"), a(this).unwrap().unwrap(), ap.controls.el && ap.controls.el.remove(), ap.controls.next && ap.controls.next.remove(), ap.controls.prev && ap.controls.prev.remove(), ap.pagerEl && ap.settings.controls && ap.pagerEl.remove(), a(".bx-caption", this).remove(), ap.controls.autoEl && ap.controls.autoEl.remove(), clearInterval(ap.interval), ap.settings.responsive && a(window).unbind("resize", e))
            }, am.reloadSlider = function(f) {
                void 0 != f && (aq = f), am.destroySlider(), ay()
            }, ay(), this
        }
    }(jQuery);
    ! function(b) {
        "function" == typeof define && define.amd ? define(["jquery"], b) : b("object" == typeof exports ? require("jquery") : jQuery)
    }(function(f) {
        function e(Q, P) {
            function O() {
                return H.update(), M(), H
            }

            function N() {
                C.css(a, H.contentPosition / H.trackRatio), F.css(a, -H.contentPosition), E.css(d, H.trackSize), D.css(d, H.trackSize), C.css(d, H.thumbSize)
            }

            function M() {
                z ? G[0].ontouchstart = function(b) {
                    1 === b.touches.length && (b.stopPropagation(), L(b.touches[0]))
                } : (C.bind("mousedown", L), D.bind("mousedown", J)), f(window).resize(function() {
                    H.update("relative")
                }), H.options.wheel && window.addEventListener ? Q[0].addEventListener(y, K, !1) : H.options.wheel && (Q[0].onmousewheel = K)
            }

            function L(j) {
                f("body").addClass("noSelect"), B = A ? j.pageX : j.pageY, H.thumbPosition = parseInt(C.css(a), 10) || 0, z ? (document.ontouchmove = function(b) {
                    b.preventDefault(), J(b.touches[0])
                }, document.ontouchend = I) : (f(document).bind("mousemove", J), f(document).bind("mouseup", I), C.bind("mouseup", I))
            }

            function K(l) {
                if (H.contentRatio < 1) {
                    var k = l || window.event,
                        j = "delta" + H.options.axis.toUpperCase(),
                        b = -(k[j] || k.detail || -1 / 3 * k.wheelDelta) / 40;
                    H.contentPosition -= b * H.options.wheelSpeed, H.contentPosition = Math.min(H.contentSize - H.viewportSize, Math.max(0, H.contentPosition)), Q.trigger("move"), C.css(a, H.contentPosition / H.trackRatio), F.css(a, -H.contentPosition), (H.options.wheelLock || H.contentPosition !== H.contentSize - H.viewportSize && 0 !== H.contentPosition) && (k = f.event.fix(k), k.preventDefault())
                }
            }

            function J(b) {
                if (H.contentRatio < 1) {
                    var l = A ? b.pageX : b.pageY,
                        k = l - B;
                    H.options.scrollInvert && z && (k = B - l);
                    var j = Math.min(H.trackSize - H.thumbSize, Math.max(0, H.thumbPosition + k));
                    H.contentPosition = j * H.trackRatio, Q.trigger("move"), C.css(a, j), F.css(a, -H.contentPosition)
                }
            }

            function I() {
                f("body").removeClass("noSelect"), f(document).unbind("mousemove", J), f(document).unbind("mouseup", I), C.unbind("mouseup", I), document.ontouchmove = document.ontouchend = null
            }
            this.options = f.extend({}, g, P), this._defaults = g, this._name = h;
            var H = this,
                G = Q.find(".viewport"),
                F = Q.find(".overview"),
                E = Q.find(".scrollbar"),
                D = E.find(".track"),
                C = E.find(".thumb"),
                B = 0,
                A = "x" === this.options.axis,
                z = "ontouchstart" in document.documentElement,
                y = "onwheel" in document || document.documentMode >= 9 ? "wheel" : void 0 !== document.onmousewheel ? "mousewheel" : "DOMMouseScroll",
                d = A ? "width" : "height",
                a = A ? "left" : "top";
            return this.contentPosition = 0, this.viewportSize = 0, this.contentSize = 0, this.contentRatio = 0, this.trackSize = 0, this.trackRatio = 0, this.thumbSize = 0, this.thumbPosition = 0, this.update = function(k) {
                var j = d.charAt(0).toUpperCase() + d.slice(1).toLowerCase();
                switch (this.viewportSize = G[0]["offset" + j], this.contentSize = F[0]["scroll" + j], this.contentRatio = this.viewportSize / this.contentSize, this.trackSize = this.options.trackSize || this.viewportSize, this.thumbSize = Math.min(this.trackSize, Math.max(0, this.options.thumbSize || this.trackSize * this.contentRatio)), this.trackRatio = this.options.thumbSize ? (this.contentSize - this.viewportSize) / (this.trackSize - this.thumbSize) : this.contentSize / this.trackSize, B = D.offset().top, E.toggleClass("disable", this.contentRatio >= 1), k) {
                    case "bottom":
                        this.contentPosition = this.contentSize - this.viewportSize;
                        break;
                    case "relative":
                        this.contentPosition = Math.min(Math.max(this.contentSize - this.viewportSize, 0), Math.max(0, this.contentPosition));
                        break;
                    default:
                        this.contentPosition = parseInt(k, 10) || 0
                }
                return N(), H
            }, O()
        }
        var h = "tinyscrollbar",
            g = {
                axis: "y",
                wheel: !0,
                wheelSpeed: 40,
                wheelLock: !0,
                scrollInvert: !1,
                trackSize: !1,
                thumbSize: !1
            };
        f.fn[h] = function(a) {
            return this.each(function() {
                f.data(this, "plugin_" + h) || f.data(this, "plugin_" + h, new e(f(this), a))
            })
        }
    });
    (function(t, r, q, A, y) {
        var C = t("<div>")[0],
            w = /url\(["']?(.*?)["']?\)/,
            s = [],
            u = {
                top: 0,
                left: 0,
                bottom: 1,
                right: 1,
                center: 0.5
            };
        if ("backgroundSize" in C.style && !t.debugBGS) {
            return
        }
        t.cssHooks.backgroundSize = {
            set: function(f, d) {
                var a = !t.data(f, "bgsImg"),
                    b, e, g;
                t.data(f, "bgsValue", d);
                if (a) {
                    s.push(f);
                    t.refreshBackgroundDimensions(f, true);
                    e = t("<div>").css({
                        position: "absolute",
                        zIndex: -1,
                        top: 0,
                        right: 0,
                        left: 0,
                        bottom: 0,
                        overflow: "hidden"
                    });
                    g = t("<img>").css({
                        position: "absolute"
                    }).appendTo(e), e.prependTo(f);
                    t.data(f, "bgsImg", g[0]);
                    b = (t.css(f, "backgroundPosition") || t.css(f, "backgroundPositionX") + " " + t.css(f, "backgroundPositionY")).split(" ");
                    t.data(f, "bgsPos", [u[b[0]] || parseFloat(b[0]) / 100, u[b[1]] || parseFloat(b[1]) / 100]);
                    t.css(f, "zIndex") == "auto" && (f.style.zIndex = 0);
                    t.css(f, "position") == "static" && (f.style.position = "relative");
                    t.refreshBackgroundImage(f)
                } else {
                    t.refreshBackground(f)
                }
            },
            get: function(a) {
                return t.data(a, "bgsValue") || ""
            }
        };
        t.cssHooks.backgroundImage = {
            set: function(b, a) {
                return t.data(b, "bgsImg") ? t.refreshBackgroundImage(b, a) : a
            }
        };
        t.refreshBackgroundDimensions = function(d, f) {
            var g = t(d),
                e = {
                    width: g.innerWidth(),
                    height: g.innerHeight()
                },
                a = t.data(d, "bgsDim"),
                b = !a || e.width != a.width || e.height != a.height;
            t.data(d, "bgsDim", e);
            if (b && !f) {
                t.refreshBackground(d)
            }
        };
        t.refreshBackgroundImage = function(e, d) {
            var g = t.data(e, "bgsImg"),
                f = (w.exec(d || t.css(e, "backgroundImage")) || [])[1],
                a = g && g.src,
                b = f != a,
                h, j;
            if (b) {
                g.style.height = g.style.width = "auto";
                g.onload = function() {
                    var k = {
                        width: g.width,
                        height: g.height
                    };
                    if (k.width == 1 && k.height == 1) {
                        return
                    }
                    t.data(e, "bgsImgDim", k);
                    t.data(e, "bgsConstrain", false);
                    t.refreshBackground(e);
                    g.style.visibility = "visible";
                    g.onload = null
                };
                g.style.visibility = "hidden";
                g.src = f;
                if (g.readyState || g.complete) {
                    g.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
                    g.src = f
                }
                e.style.backgroundImage = "none"
            }
        };
        t.refreshBackground = function(a) {
            var g = t.data(a, "bgsValue"),
                m = t.data(a, "bgsDim"),
                l = t.data(a, "bgsImgDim"),
                d = t(t.data(a, "bgsImg")),
                h = t.data(a, "bgsPos"),
                k = t.data(a, "bgsConstrain"),
                j, e = m.width / m.height,
                b = l.width / l.height,
                f;
            if (g == "contain") {
                if (b > e) {
                    t.data(a, "bgsConstrain", (j = "width"));
                    f = A.floor((m.height - m.width / b) * h[1]);
                    d.css({
                        top: f
                    });
                    if (j != k) {
                        d.css({
                            width: "100%",
                            height: "auto",
                            left: 0
                        })
                    }
                } else {
                    t.data(a, "bgsConstrain", (j = "height"));
                    f = A.floor((m.width - m.height * b) * h[0]);
                    d.css({
                        left: f
                    });
                    if (j != k) {
                        d.css({
                            height: "100%",
                            width: "auto",
                            top: 0
                        })
                    }
                }
            } else {
                if (g == "cover") {
                    if (b > e) {
                        t.data(a, "bgsConstrain", (j = "height"));
                        f = A.floor((m.height * b - m.width) * h[0]);
                        d.css({
                            left: -f
                        });
                        if (j != k) {
                            d.css({
                                height: "100%",
                                width: "auto",
                                top: 0
                            })
                        }
                    } else {
                        t.data(a, "bgsConstrain", (j = "width"));
                        f = A.floor((m.width / b - m.height) * h[1]);
                        d.css({
                            top: -f
                        });
                        if (j != k) {
                            d.css({
                                width: "100%",
                                height: "auto",
                                left: 0
                            })
                        }
                    }
                }
            }
        };
        var D = t.event,
            B, x = {
                _: 0
            },
            z = 0,
            v, p;
        B = D.special.throttledresize = {
            setup: function() {
                t(this).on("resize", B.handler)
            },
            teardown: function() {
                t(this).off("resize", B.handler)
            },
            handler: function(a, e) {
                var b = this,
                    d = arguments;
                v = true;
                if (!p) {
                    t(x).animate(x, {
                        duration: Infinity,
                        step: function() {
                            z++;
                            if (z > B.threshold && v || e) {
                                a.type = "throttledresize";
                                D.dispatch.apply(b, d);
                                v = false;
                                z = 0
                            }
                            if (z > 9) {
                                t(x).stop();
                                p = false;
                                z = 0
                            }
                        }
                    });
                    p = true
                }
            },
            threshold: 1
        };
        t(r).on("throttledresize", function() {
            t(s).each(function() {
                t.refreshBackgroundDimensions(this)
            })
        })
    })(jQuery, window, document, Math);
    ! function(J) {
        function ab(d, g, b) {
            var f = this;
            return this.on("click.pjax", d, function(h) {
                var a = J.extend({}, aa(g, b));
                a.container || (a.container = J(this).attr("data-pjax") || f), M(h, a)
            })
        }

        function M(f, d, j) {
            j = aa(d, j);
            var g = f.currentTarget;
            if ("A" !== g.tagName.toUpperCase()) {
                throw "$.fn.pjax or $.pjax.click requires an anchor element"
            }
            if (!(f.which > 1 || f.metaKey || f.ctrlKey || f.shiftKey || f.altKey || location.protocol !== g.protocol || location.hostname !== g.hostname || g.hash && g.href.replace(g.hash, "") === location.href.replace(location.hash, "") || g.href === location.href + "#" || f.isDefaultPrevented())) {
                var a = {
                        url: g.href,
                        container: J(g).attr("data-pjax"),
                        target: g
                    },
                    b = J.extend({}, a, j),
                    h = J.Event("pjax:click");
                J(g).trigger(h, [b]), h.isDefaultPrevented() || (af(b), f.preventDefault(), J(g).trigger("pjax:clicked", [b]))
            }
        }

        function Q(d, b, g) {
            g = aa(b, g);
            var f = d.currentTarget;
            if ("FORM" !== f.tagName.toUpperCase()) {
                throw "$.pjax.submit requires a form element"
            }
            var a = {
                type: f.method.toUpperCase(),
                url: f.action,
                data: J(f).serializeArray(),
                container: J(f).attr("data-pjax"),
                target: f
            };
            af(J.extend({}, a, g)), d.preventDefault()
        }

        function af(g) {
            function b(m, l, f) {
                f || (f = {}), f.relatedTarget = k;
                var n = J.Event(m, f);
                return a.trigger(n, l), !n.isDefaultPrevented()
            }
            g = J.extend(!0, {}, J.ajaxSettings, af.defaults, g), J.isFunction(g.url) && (g.url = g.url());
            var k = g.target,
                h = N(g.url).hash,
                a = g.context = ac(g.container);
            g.data || (g.data = {}), g.data._pjax = a.selector;
            var j;
            g.beforeSend = function(e, f) {
                return "GET" !== f.type && (f.timeout = 0), e.setRequestHeader("X-PJAX", "true"), e.setRequestHeader("X-PJAX-Container", a.selector), b("pjax:beforeSend", [e, f]) ? (f.timeout > 0 && (j = setTimeout(function() {
                    b("pjax:timeout", [e, g]) && e.abort("timeout")
                }, f.timeout), f.timeout = 0), void(g.requestUrl = N(f.url).href)) : !1
            }, g.complete = function(e, f) {
                j && clearTimeout(j), b("pjax:complete", [e, f, g]), b("pjax:end", [e, g])
            }, g.error = function(f, p, e) {
                var m = G("", f, g),
                    l = b("pjax:error", [f, p, e, g]);
                "GET" == g.type && "abort" !== p && l && X(m.url)
            }, g.success = function(e, v, E) {
                var s = af.state,
                    t = "function" == typeof J.pjax.defaults.version ? J.pjax.defaults.version() : J.pjax.defaults.version,
                    p = E.getResponseHeader("X-PJAX-Version"),
                    l = G(e, E, g);
                if (t && p && t !== p) {
                    return void X(l.url)
                }
                if (!l.contents) {
                    return void X(l.url)
                }
                af.state = {
                    id: g.id || U(),
                    url: l.url,
                    title: l.title,
                    container: a.selector,
                    fragment: g.fragment,
                    timeout: g.timeout
                }, (g.push || g.replace) && window.history.replaceState(af.state, l.title, l.url);
                try {
                    document.activeElement.blur()
                } catch (o) {}
                l.title && (document.title = l.title), b("pjax:beforeReplace", [l.contents, g], {
                    state: af.state,
                    previousState: s
                }), a.html(l.contents);
                var r = a.find("input[autofocus], textarea[autofocus]").last()[0];
                if (r && document.activeElement !== r && r.focus(), D(l.scripts), "number" == typeof g.scrollTo && J(window).scrollTop(g.scrollTo), "" !== h) {
                    var C = N(l.url);
                    C.hash = h, af.state.url = C.href, window.history.replaceState(af.state, l.title, C.href);
                    var x = J(C.hash);
                    x.length && J(window).scrollTop(x.offset().top)
                }
                b("pjax:success", [e, v, E, g])
            }, af.state || (af.state = {
                id: U(),
                url: window.location.href,
                title: document.title,
                container: a.selector,
                fragment: g.fragment,
                timeout: g.timeout
            }, window.history.replaceState(af.state, document.title));
            var d = af.xhr;
            d && d.readyState < 4 && (d.onreadystatechange = J.noop, d.abort()), af.options = g;
            var d = af.xhr = J.ajax(g);
            return d.readyState > 0 && (g.push && !g.replace && (W(af.state.id, a.clone().contents()), window.history.pushState(null, "", H(g.requestUrl))), b("pjax:start", [d, g]), b("pjax:send", [d, g])), af.xhr
        }

        function O(b, a) {
            var d = {
                url: window.location.href,
                push: !1,
                replace: !0,
                scrollTo: !1
            };
            return af(J.extend(d, aa(b, a)))
        }

        function X(a) {
            window.history.replaceState(null, "", "#"), window.location.replace(a)
        }

        function K(h) {
            var a = af.state,
                f = h.state;
            if (f && f.container) {
                if (q && z == f.url) {
                    return
                }
                if (af.state && af.state.id === f.id) {
                    return
                }
                var d = J(f.container);
                if (d.length) {
                    var m, j = A[f.id];
                    af.state && (m = af.state.id < f.id ? "forward" : "back", Z(m, af.state.id, d.clone().contents()));
                    var g = J.Event("pjax:popstate", {
                        state: f,
                        direction: m
                    });
                    d.trigger(g);
                    var k = {
                        id: f.id,
                        url: f.url,
                        container: d,
                        push: !1,
                        fragment: f.fragment,
                        timeout: f.timeout,
                        scrollTo: !1
                    };
                    if (j) {
                        d.trigger("pjax:start", [null, k]), af.state = f, f.title && (document.title = f.title);
                        var b = J.Event("pjax:beforeReplace", {
                            state: f,
                            previousState: a
                        });
                        d.trigger(b, [j, k]), d.html(j), d.trigger("pjax:end", [null, k])
                    } else {
                        af(k)
                    }
                    d[0].offsetHeight
                } else {
                    X(location.href)
                }
            }
            q = !1
        }

        function ad(f) {
            var d = J.isFunction(f.url) ? f.url() : f.url,
                h = f.type ? f.type.toUpperCase() : "GET",
                b = J("<form>", {
                    method: "GET" === h ? "GET" : "POST",
                    action: d,
                    style: "display:none"
                });
            "GET" !== h && "POST" !== h && b.append(J("<input>", {
                type: "hidden",
                name: "_method",
                value: h.toLowerCase()
            }));
            var g = f.data;
            if ("string" == typeof g) {
                J.each(g.split("&"), function(j, a) {
                    var k = a.split("=");
                    b.append(J("<input>", {
                        type: "hidden",
                        name: k[0],
                        value: k[1]
                    }))
                })
            } else {
                if ("object" == typeof g) {
                    for (key in g) {
                        b.append(J("<input>", {
                            type: "hidden",
                            name: key,
                            value: g[key]
                        }))
                    }
                }
            }
            J(document.body).append(b), b.submit()
        }

        function U() {
            return (new Date).getTime()
        }

        function H(a) {
            return a.replace(/\?_pjax=[^&]+&?/, "?").replace(/_pjax=[^&]+&?/, "").replace(/[\?&]$/, "")
        }

        function N(a) {
            var b = document.createElement("a");
            return b.href = a, b
        }

        function aa(b, a) {
            return b && a ? a.container = b : a = J.isPlainObject(b) ? b : {
                container: b
            }, a.container && (a.container = ac(a.container)), a
        }

        function ac(a) {
            if (a = J(a), a.length) {
                if ("" !== a.selector && a.context === document) {
                    return a
                }
                if (a.attr("id")) {
                    return J("#" + a.attr("id"))
                }
                throw "cant get selector for pjax container!"
            }
            throw "no pjax container for " + a.selector
        }

        function Y(a, b) {
            return a.filter(b).add(a.find(b))
        }

        function R(a) {
            return J.parseHTML(a, document, !0)
        }

        function G(h, g, k) {
            var b = {};
            if (b.url = H(g.getResponseHeader("X-PJAX-URL") || k.requestUrl), /<html/i.test(h)) {
                var j = J(R(h.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0])),
                    d = J(R(h.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
            } else {
                var j = d = J(R(h))
            }
            if (0 === d.length) {
                return b
            }
            if (b.title = Y(j, "title").last().text(), k.fragment) {
                if ("body" === k.fragment) {
                    var f = d
                } else {
                    var f = Y(d, k.fragment).first()
                }
                f.length && (b.contents = f.contents(), b.title || (b.title = f.attr("title") || f.data("title")))
            } else {
                /<html/i.test(h) || (b.contents = d)
            }
            return b.contents && (b.contents = b.contents.not(function() {
                return J(this).is("title")
            }), b.contents.find("title").remove(), b.scripts = Y(b.contents, "script[src]").remove(), b.contents = b.contents.not(b.scripts)), b.title && (b.title = J.trim(b.title)), b
        }

        function D(b) {
            if (b) {
                var a = J("script[src]");
                b.each(function() {
                    var f = this.src,
                        g = a.filter(function() {
                            return this.src === f
                        });
                    if (!g.length) {
                        var d = document.createElement("script");
                        d.type = J(this).attr("type"), d.src = J(this).attr("src"), document.head.appendChild(d)
                    }
                })
            }
        }

        function W(a, b) {
            for (A[a] = b, L.push(a); V.length;) {
                delete A[V.shift()]
            }
            for (; L.length > af.defaults.maxCacheLength;) {
                delete A[L.shift()]
            }
        }

        function Z(d, g, f) {
            var h, b;
            A[g] = f, "forward" === d ? (h = L, b = V) : (h = V, b = L), h.push(g), (g = b.pop()) && delete A[g]
        }

        function F() {
            return J("meta").filter(function() {
                var a = J(this).attr("http-equiv");
                return a && "X-PJAX-VERSION" === a.toUpperCase()
            }).attr("content")
        }

        function B() {
            J.fn.pjax = ab, J.pjax = af, J.pjax.enable = J.noop, J.pjax.disable = ae, J.pjax.click = M, J.pjax.submit = Q, J.pjax.reload = O, J.pjax.defaults = {
                timeout: 650,
                push: !0,
                replace: !1,
                type: "GET",
                dataType: "html",
                scrollTo: 0,
                maxCacheLength: 20,
                version: F
            }, J(window).on("popstate.pjax", K)
        }

        function ae() {
            J.fn.pjax = function() {
                return this
            }, J.pjax = ad, J.pjax.enable = B, J.pjax.disable = J.noop, J.pjax.click = J.noop, J.pjax.submit = J.noop, J.pjax.reload = function() {
                window.location.reload()
            }, J(window).off("popstate.pjax", K)
        }
        var q = !0,
            z = window.location.href,
            I = window.history.state;
        I && I.container && (af.state = I), "state" in window.history && (q = !1);
        var A = {},
            V = [],
            L = [];
        J.inArray("state", J.event.props) < 0 && J.event.props.push("state"), J.support.pjax = window.history && window.history.pushState && window.history.replaceState && !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]|WebApps\/.+CFNetwork)/), J.support.pjax ? B() : ae()
    }(jQuery);
    (function(v, t, y) {
        var C = Object.prototype.toString.call(v.operamini) == "[object OperaMini]";
        var D = "placeholder" in t.createElement("input") && !C;
        var x = "placeholder" in t.createElement("textarea") && !C;
        var s = y.fn;
        var z = y.valHooks;
        var B = y.propHooks;
        var q;
        var r;
        if (D && x) {
            r = s.placeholder = function() {
                return this
            };
            r.input = r.textarea = true
        } else {
            r = s.placeholder = function() {
                var a = this;
                a.filter((D ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                    "focus.placeholder": A,
                    "blur.placeholder": w
                }).data("placeholder-enabled", true).trigger("blur.placeholder");
                return a
            };
            r.input = D;
            r.textarea = x;
            q = {
                get: function(b) {
                    var d = y(b);
                    var a = d.data("placeholder-password");
                    if (a) {
                        return a[0].value
                    }
                    return d.data("placeholder-enabled") && d.hasClass("placeholder") ? "" : b.value
                },
                set: function(d, a) {
                    var e = y(d);
                    var b = e.data("placeholder-password");
                    if (b) {
                        return b[0].value = a
                    }
                    if (!e.data("placeholder-enabled")) {
                        return d.value = a
                    }
                    if (a == "") {
                        d.value = a;
                        if (d != p()) {
                            w.call(d)
                        }
                    } else {
                        if (e.hasClass("placeholder")) {
                            A.call(d, true, a) || (d.value = a)
                        } else {
                            d.value = a
                        }
                    }
                    return e
                }
            };
            if (!D) {
                z.input = q;
                B.value = q
            }
            if (!x) {
                z.textarea = q;
                B.value = q
            }
            y(function() {
                y(t).delegate("form", "submit.placeholder", function() {
                    var a = y(".placeholder", this).each(A);
                    setTimeout(function() {
                        a.each(w)
                    }, 10)
                })
            });
            y(v).bind("beforeunload.placeholder", function() {
                y(".placeholder").each(function() {
                    this.value = ""
                })
            })
        }

        function u(b) {
            var d = {};
            var a = /^jQuery\d+$/;
            y.each(b.attributes, function(e, f) {
                if (f.specified && !a.test(f.name)) {
                    d[f.name] = f.value
                }
            });
            return d
        }

        function A(d, b) {
            var e = this;
            var a = y(e);
            if (e.value == a.attr("placeholder") && a.hasClass("placeholder")) {
                if (a.data("placeholder-password")) {
                    a = a.hide().next().show().attr("id", a.removeAttr("id").data("placeholder-id"));
                    if (d === true) {
                        return a[0].value = b
                    }
                    a.focus()
                } else {
                    e.value = "";
                    a.removeClass("placeholder");
                    e == p() && e.select()
                }
            }
        }

        function w() {
            var a;
            var f = this;
            var b = y(f);
            var d = this.id;
            if (f.value == "") {
                if (f.type == "password") {
                    if (!b.data("placeholder-textinput")) {
                        try {
                            a = b.clone().attr({
                                type: "text"
                            })
                        } catch (e) {
                            a = y("<input>").attr(y.extend(u(this), {
                                type: "text"
                            }))
                        }
                        a.removeAttr("name").data({
                            "placeholder-password": b,
                            "placeholder-id": d
                        }).bind("focus.placeholder", A);
                        b.data({
                            "placeholder-textinput": a,
                            "placeholder-id": d
                        }).before(a)
                    }
                    b = b.removeAttr("id").hide().prev().attr("id", d).show()
                }
                b.addClass("placeholder");
                b[0].value = b.attr("placeholder")
            } else {
                b.removeClass("placeholder")
            }
        }

        function p() {
            try {
                return t.activeElement
            } catch (a) {}
        }
    }(this, document, jQuery));
    var cX = cY = pX = pY = tX = tY = 0;
    var wW, wH, half_wW, half_wH, aspect_ratio, canvas, ctx_t, bgCanvas, bgctx, particles = [],
        img, cW, cH, create_t_left, create_t_top, int_draw_t, wW_ratio, wH_ratio, analyser, audio, audioContext, source, gainNode, maxMagnitude, c, ctx;
    var audioflag = false;
    var drow_round = {
        circles: 20,
        r: 12
    };
    var settings = {
        circles: 30,
        hue: 0
    };
    if (getUA() === "chrome") {
        var intval = 20;
        var density = 12
    } else {
        var intval = 40;
        var density = 18
    }
    var range = 10;
    var speed = 100;
    var megane = 130;
    var stroke_megane = 25;
    var jimble = 2;
    HTML = $("html");
    DIR = $("html").data("dir");
    var imageW = 300;
    var imageH = 3918;
    var cW = 800;
    var cH = imageH;
    var image = new Image();
    image.src = "./wp/wp-content/themes/kenjiendo_v2/img/kenjiendo2.png";
    $(function() {
        getUA();
        $("input, textarea").placeholder();
        var b = $("body").data("src");
        var d = b + "?" + parseInt((new Date) / 1000);
        var a = '<audio id="sound" preload="auto" controls="1" loop="1" ><source src="' + d + '" type="audio/mp3"></audio>';
        $("body").prepend(a);
        setSize();
        preload();
        common();
        wT = $(window).scrollTop();
        viewcheck()
    });
    $(window).mousemove(function(a) {
        cX = a.clientX;
        cY = a.clientY;
        pX = a.pageX;
        pY = a.pageY;
        tX = pX - create_t_left;
        tY = pY - create_t_top;
        if (getUA() === "chrome" || getUA() === "firefox") {
            TweenLite.to($(".prof_top"), 1, {
                css: {
                    transform: "translateY(" + (cY - half_wH) / 20 + "px)"
                },
                ease: Power4.easeOut
            });
            TweenLite.to($(".prof_bottom"), 1, {
                css: {
                    transform: "translateY(" + (cY - half_wH) / 30 + "px)"
                },
                ease: Power4.easeOut
            })
        }
    });

    function lateload() {
        $(".late").each(function(a, d) {
            var e = $(this);
            var f = e.data("src");
            var b = e.data("width");
            e.html('<img src="' + f + '" width="' + b + '">')
        })
    }

    function preload() {
        if (richflag) {
            Array.prototype.remove = function(g) {
                for (var f = 0; f < this.length; f++) {
                    if (this[f] == g) {
                        this.splice(f, 1)
                    }
                }
            };

            function a(f, g) {
                var h = f.length;
                $(f).each(function() {
                    var j = this;
                    $("<img/>").attr("src", j).load(function() {
                        f.remove(j);
                        g(h, h - f.length)
                    })
                })
            }
            var b = 0;
            var e = 0;
            a(["./wp/wp-content/themes/kenjiendo_v2/img/kenjiendo2.png", "./wp/wp-content/themes/kenjiendo_v2/img/main.jpg"], function(g, f) {
                b = Math.ceil(100 * f / g)
            });
            var d = window.setInterval(function() {
                if (e >= 100) {
                    window.clearInterval(d);
                    $("body").removeClass("preload");
                    setTimeout(function() {
                        $(".firstload").remove()
                    }, 1000);
                    setTimeout(function() {
                        setdraw_t();
                        if (getUA() === "chrome" || getUA() === "firefox") {
                            if (canvas_flag_audio) {
                                setupWebAudio();
                                draw();
                                time()
                            }
                        } else {
                            draw_roundy()
                        }
                    }, 500);
                    if (getUA() === "firefox") {} else {
                        int_draw_t = setInterval(function() {
                            draw_t()
                        }, intval)
                    }
                    setupParticles()
                } else {
                    if (e < b) {
                        e++;
                        $(".preloadbar").css({
                            width: e + "%"
                        })
                    }
                }
            }, 10)
        } else {
            $(window).on("load", function() {
                $("body").removeClass("preload");
                $(".firstload").fadeOut("400");
                setTimeout(function() {
                    setdraw_t();
                    if (getUA() === "chrome" || getUA() === "firefox") {
                        if (canvas_flag_audio) {
                            setupWebAudio();
                            draw();
                            time()
                        }
                    } else {
                        draw_roundy()
                    }
                }, 500);
                if (getUA() === "firefox") {} else {
                    int_draw_t = setInterval(function() {
                        draw_t()
                    }, intval)
                }
                setupParticles()
            })
        }
    }

    function common() {
        clearInterval(int_draw_t);
        HTML = $("html");
        DIAL = $(".dial");
        canvas_flag_audio = $("#sound_effect").length;
        canvas_flag = $("#kenjiendo").length;
        sidenavs = $(".sidenav").children();
        circle_bar = $(".circle_control_bar");
        circle_lines = $(".circle_control_lines").children();
        $(".post_list .post:nth-child(3n)").addClass("last");
        $(".album_slide_body").bxSlider({
            pager: false,
            nextSelector: ".gotonext",
            prevSelector: ".gotoprev",
            nextText: '<img src="' + DIR + '/img/next.png" width="8">',
            prevText: '<img src="' + DIR + '/img/prev.png" width="8">'
        });
        if ($(".create_t").length) {
            create_t_top = $(".create_t").offset().top;
            create_t_left = $(".create_t").offset().left
        }
        $(".pagging").find("a").each(function(b, d) {
            var a = $(this).attr("href");
            var e = a.replace(/\?_pjax=%23loadbody/g, "");
            $(this).attr("href", e)
        });
        HTML.addClass(getUA);
        setCanvas();
        if (!$(".subpages").length) {
            if (getUA() === "chrome" || getUA() === "firefox") {
                setCirclePlayer();
                circlelines()
            } else {
                $("#sound,.circle_control").remove()
            }
            setdraw_t()
        }
        $(".cover").each(function(a, d) {
            var e = $(this);
            var b = e.data("split");
            e.css({
                height: (wH / 100) * b
            })
        });
        $(window).on("load", function() {
            setTimeout(function() {
                HTML.addClass("loaded")
            }, 1000);
            $(".cover").each(function(a, b) {
                var d = $(this);
                var e = d.data("src");
                d.css({
                    "background-size": "cover",
                    "background-image": "url(" + e + ")"
                })
            });
            lateload();
            if (wW > 800) {
                $("#news_scroll_wrap").tinyscrollbar({
                    trackSize: 160
                });
                $("#footer_scroll_wrap").tinyscrollbar({
                    trackSize: 160
                })
            }
            setSize();
            if (!$(".subpages").length) {
                setdraw_t()
            }
        });
        $(window).on("resize", function() {
            setSize();
            if (!$(".subpages").length) {
                setdraw_t()
            }
            if ($(".create_t").length) {
                create_t_top = $(".create_t").offset().top;
                create_t_left = $(".create_t").offset().left
            }
        });
        $(window).on("scroll", function() {
            wT = $(window).scrollTop();
            setSidenav();
            scrolling();
            viewcheck()
        })
    }

    function viewcheck() {
        $(".viewin").each(function(a, e) {
            var b = $(this);
            var d = b.offset().top;
            if (wT + wH > d + 100) {
                b.addClass("come")
            } else {
                b.removeClass("come")
            }
        })
    }

    function commonafter() {
        clearInterval(int_draw_t);
        HTML = $("html");
        DIAL = $(".dial");
        canvas_flag_audio = $("#sound_effect").length;
        canvas_flag = $("#kenjiendo").length;
        sidenavs = $(".sidenav").children();
        circle_bar = $(".circle_control_bar");
        circle_lines = $(".circle_control_lines").children();
        $(".post_list .post:nth-child(3n)").addClass("last");
        $(".album_slide_body").bxSlider({
            pager: false,
            nextSelector: ".gotonext",
            prevSelector: ".gotoprev",
            nextText: '<img src="' + DIR + '/img/next.png" width="8">',
            prevText: '<img src="' + DIR + '/img/prev.png" width="8">'
        });
        if ($(".create_t").length) {
            create_t_top = $(".create_t").offset().top;
            create_t_left = $(".create_t").offset().left
        }
        HTML.addClass(getUA);
        setCanvas();
        if (!$(".subpages").length) {
            if (getUA() === "chrome" || getUA() === "firefox") {
                setCirclePlayer();
                circlelines()
            } else {
                $("#sound,.circle_control").remove()
            }
            setdraw_t()
        }
        $(".cover").each(function(a, d) {
            var e = $(this);
            var b = e.data("split");
            e.css({
                height: (wH / 100) * b
            })
        });
        $(window).on("resize", function() {
            setSize();
            if (!$(".subpages").length) {
                setdraw_t()
            }
        });
        if (wW > 800) {
            $("#news_scroll_wrap").tinyscrollbar({
                trackSize: 160
            });
            $("#footer_scroll_wrap").tinyscrollbar({
                trackSize: 160
            })
        }
    }

    function setSize() {
        wT = $(window).scrollTop();
        wW = $(window).width();
        wH = $(window).height();
        half_wW = wW / 2;
        half_wH = wH / 2;
        aspect_ratio = wH / wW;
        wW_ratio = wW / 1024;
        wH_ratio = wH / 255;
        maxMagnitude = 1024 * 255;
        $("#sound_effect").attr({
            width: wW,
            height: wH
        })
    }

    function setCirclePlayer() {
        DIAL.knob({
            width: 450,
            displayInput: false,
            skin: "tron",
            angleOffset: 90,
            change: function(a) {
                HTML.addClass("circle_control_drag");
                if (audio.currentTime > 0) {
                    if (audioflag) {
                        var b = (a * circle_total) / 100;
                        audio.currentTime = b
                    }
                }
            },
            release: function(a) {
                setTimeout(function() {
                    HTML.removeClass("circle_control_drag")
                }, 1000)
            }
        });
        $(".circle_control_hide canvas").attr("height", 450)
    }

    function setCanvas() {
        c1 = document.getElementById("sound_effect");
        if (canvas_flag_audio) {
            if (getUA().indexOf("ie8") == -1) {
                ctx = c1.getContext("2d");
                c1.width = wW;
                c1.height = wH
            }
        }
    }

    function audioProgress(d) {
        var a = circle_bar.attr("r");
        var e = Math.PI * (a * 2);
        if (!d) {
            d = 0
        }
        if (d < 0) {
            d = 0
        }
        if (d > 100) {
            d = 100
        }
        if (d > 0) {
            HTML.addClass("circle_control_begin")
        }
        var b = ((100 - d) / 100) * e;
        circle_bar.css({
            strokeDashoffset: b
        })
    }

    function circlelines() {
        circle_lines.each(function(a, b) {
            var d = $(this);
            d.css({
                strokeDashoffset: "0px",
                "transition-delay": a / 500 + "s"
            })
        })
    }

    function setupWebAudio() {
        audio = document.getElementById("sound");
        circle_total = Math.round(audio.duration);
        var a = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);
        audio.play();
        audioContext = new a();
        analyser = audioContext.createAnalyser();
        source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(audioContext.destination)
    }

    function isPlaying() {
        return !audio.paused && !audio.ended && 0 < audio.currentTime
    }

    function time() {
        audio.addEventListener("timeupdate", function() {
            circle_total = Math.round(audio.duration);
            audioflag = true;
            var b = Math.floor(audio.currentTime);
            settings.hue = b % 360;
            var a = "hsla(" + (settings.hue * 2) + ",50%,50%,1)";
            circle_bar.css({
                stroke: a
            });
            var d = (b / circle_total * 100);
            DIAL.val(d).trigger("change");
            if (isPlaying()) {
                audioProgress(d);
                HTML.addClass("audio_play").removeClass("audio_pause")
            } else {
                HTML.addClass("audio_pause").removeClass("audio_play")
            }
        }, true)
    }
    window.requestAnimFrame = (function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(b, a) {
            window.setTimeout(b, 1000 / 60)
        }
    })();

    function draw() {
        var f = [],
            g, h, d;
        requestAnimFrame(draw);
        var a = new Uint8Array(analyser.frequencyBinCount);
        analyser.getByteFrequencyData(a);
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.fillRect(0, 0, wW, wH);
        d = 0;
        for (var e = 0; e < settings.circles; e += 1) {
            f[e] = {
                magnitude: 0
            };
            for (var b = 0; b < (1024 / (e + 1)); b += 1) {
                f[e].magnitude += a[b]
            }
            f[e].ratio = f[e].magnitude / (maxMagnitude / settings.circles);
            f[e].strength = f[e].ratio * wH / settings.circles;
            ctx.strokeStyle = "hsla(" + (settings.hue * 2) + ", 50%, 50%, " + ((1 / settings.circles) + 0.1) + ")";
            ctx.fillStyle = "hsla(" + (settings.hue * 2) + ", 50%, 50%, " + ((1 / settings.circles) + 0.1) + ")";
            ctx.beginPath();
            ctx.arc(half_wW, half_wH, f[e].strength, 0, Math.PI * 2, true);
            ctx.stroke();
            ctx.fill();
            d += f[e].magnitude
        }
        g = d / maxMagnitude
    }

    function draw_roundy() {
        if (wW > 800 && richflag) {
            requestAnimFrame(draw_roundy);
            ctx.clearRect(0, 0, wW, wH);
            ctx.fillStyle = "rgba(52, 180, 180, 0.1)";
            ctx.strokeStyle = "rgba(52, 180, 180, 0)";
            for (var b = 0; b < drow_round.circles; b++) {
                var d = drow_round.r + (drow_round.r * b);
                var a = half_wW + ((cX - half_wW) * b) / 100;
                var e = half_wH + ((cY - half_wH) * b) / 100;
                ctx.beginPath();
                ctx.arc(a, e, d, 0, Math.PI * 2, true);
                ctx.stroke();
                ctx.fill()
            }
        }
    }

    function setdraw_t() {
        if (canvas_flag) {
            if (richflag) {
                canvas = document.getElementById("kenjiendo");
                bgCanvas = document.getElementById("kenjiendo_bk");
                ctx_t = canvas.getContext("2d");
                bgctx = bgCanvas.getContext("2d");
                canvas.width = cW;
                canvas.height = cH;
                bgCanvas.width = cW;
                bgCanvas.height = cH;
                prepare();
                setupParticles();
                ctx_t.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH)
            }
        }
    }

    function prepare() {
        imgX = (cW - imageW) / 2;
        imgY = (cH - imageH) / 2;
        bgctx.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH)
    }

    function setupParticles() {
        if (canvas_flag && richflag) {
            particles = [];
            var f, d, b;
            f = bgctx.getImageData(0, 0, cW, cH);
            d = f.data;
            for (var e = 0; e < cW; e += density) {
                for (var a = 0; a < cH; a += density) {
                    b = d[((e + (a * cW)) * 4) - 1];
                    if (b == 255) {
                        particles.push({
                            x: e,
                            y: a,
                            x0: e,
                            y0: a
                        })
                    }
                }
            }
        }
    }

    function draw_t() {
        if (canvas_flag && richflag) {
            ctx_t.clearRect(0, 0, cW, cH);
            ctx_t.drawImage(image, 0, 0, imageW, imageH, imgX, imgY, imageW, imageH);
            ctx_t.globalCompositeOperation = "destination-out";
            for (var g = 0; g <= 10; g++) {
                var j = 1 - g / 10;
                var b = 80 + (g * 3);
                ctx_t.beginPath();
                ctx_t.fillStyle = "rgba(255,255,255," + j + ")";
                ctx_t.arc(tX, tY, b, 0, Math.PI * 2, true);
                ctx_t.closePath();
                ctx_t.fill()
            }
            ctx_t.globalCompositeOperation = "source-over";
            for (var g = 0, l = particles.length; g < l; ++g) {
                var d = particles[g];
                dx = tX - d.x;
                dy = tY - d.y;
                distance = Math.sqrt(dx * dx + dy * dy);
                d.x = (d.x - (dx / distance) * (range / distance) * speed) - ((d.x - d.x0) / 2);
                d.y = (d.y - (dy / distance) * (range / distance) * speed) - ((d.y - d.y0) / 2);
                var o = d.x - tX;
                var m = d.y - tY;
                var q = Math.sqrt(Math.pow(o, 2) + Math.pow(m, 2));
                if (q < megane) {
                    for (var e = 1; e < particles.length; e++) {
                        var f = particles[e];
                        var k = d.x - f.x;
                        var h = d.y - f.y;
                        var a = Math.sqrt(Math.pow(k, 2) + Math.pow(h, 2));
                        if (a < stroke_megane) {
                            ctx_t.beginPath();
                            ctx_t.lineWidth = 0.3;
                            ctx_t.strokeStyle = "rgba(255,255,255,1)";
                            ctx_t.lineTo(d.x + (Math.random() * jimble - jimble / 2), d.y + (Math.random() * jimble - jimble / 2));
                            ctx_t.lineTo(f.x + (Math.random() * jimble - jimble / 2), f.y + (Math.random() * jimble - jimble / 2));
                            ctx_t.lineTo(d.x0, d.y0);
                            ctx_t.lineTo(f.x0, f.y0);
                            ctx_t.closePath();
                            ctx_t.stroke()
                        }
                    }
                }
            }
        }
    }
    var sideoffset = {
        p1: 503,
        p2: 903,
        p3: 1304,
        p4: 1704,
        p5: 2504,
        p6: 2903,
        p7: 3304,
        p8: 3703
    };
    $(function() {
        sidenavs.eq(0).children().attr("data-pos", "0");
        sidenavs.eq(1).children().attr("data-pos", sideoffset.p1);
        sidenavs.eq(2).children().attr("data-pos", sideoffset.p2);
        sidenavs.eq(3).children().attr("data-pos", sideoffset.p3);
        sidenavs.eq(4).children().attr("data-pos", sideoffset.p4);
        sidenavs.eq(6).children().attr("data-pos", sideoffset.p5);
        sidenavs.eq(7).children().attr("data-pos", sideoffset.p6);
        sidenavs.eq(8).children().attr("data-pos", sideoffset.p7);
        sidenavs.eq(9).children().attr("data-pos", sideoffset.p8)
    });

    function setSidenav() {
        if (wT < sideoffset.p1) {
            sidenavs.removeClass("on");
            sidenavs.eq(0).addClass("on")
        } else {
            if (wT < sideoffset.p2) {
                sidenavs.removeClass("on");
                sidenavs.eq(1).addClass("on")
            } else {
                if (wT < sideoffset.p3) {
                    sidenavs.removeClass("on");
                    sidenavs.eq(2).addClass("on")
                } else {
                    if (wT < sideoffset.p4) {
                        sidenavs.removeClass("on");
                        sidenavs.eq(3).addClass("on")
                    } else {
                        if (wT < sideoffset.p5) {
                            sidenavs.removeClass("on");
                            sidenavs.eq(4).addClass("on")
                        } else {
                            if (wT < sideoffset.p6) {
                                sidenavs.removeClass("on");
                                sidenavs.eq(6).addClass("on")
                            } else {
                                if (wT < sideoffset.p7) {
                                    sidenavs.removeClass("on");
                                    sidenavs.eq(7).addClass("on")
                                } else {
                                    if (wT < sideoffset.p8) {
                                        sidenavs.removeClass("on");
                                        sidenavs.eq(8).addClass("on")
                                    } else {
                                        sidenavs.removeClass("on");
                                        sidenavs.eq(9).addClass("on");
                                        sidenavs.eq(5).addClass("on")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    function scrolling() {
        var a = (1 - ((wH - wT) / wH)) / 2 + 0.4;
        $(".subheader_mask").css({
            background: "rgba(0,0,0," + a + ")"
        })
    }
    $(function() {
        if (richflag) {
            $(".borders").find("path").each(function(b) {
                var e = this;
                var a = e.getTotalLength();
                var d = e.getPointAtLength(0);
                $(this).attr({
                    "stroke-dasharray": a,
                    "stroke-dashoffset": a
                })
            })
        }
    });
    var sharetxt = "ENDO KENJI";
    $(document).on("click", ".fb", function(b) {
        b.preventDefault();
        var a = encodeURI(location.href);
        var d = "https://www.facebook.com/share.php?u=" + a;
        window.open(d, "facebook", "width=650, height=450, menubar=no, toolbar=no, scrollbars=yes");
        return false
    });
    $(document).on("click", ".tw", function(b) {
        b.preventDefault();
        var a = encodeURI(location.href);
        var d = "https://twitter.com/share?count=horizontal&amp;original_referer=" + a + "&amp;text=" + sharetxt + "&amp;";
        window.open(d, "twitter", "width=650, height=450, menubar=no, toolbar=no, scrollbars=yes");
        return false
    });
    $(document).on("click", ".gg", function(b) {
        b.preventDefault();
        var a = encodeURI(location.href);
        var d = "https://plus.google.com/share?url=" + a;
        window.open(d, "googleplus", "width=650, height=450, menubar=no, toolbar=no, scrollbars=yes");
        return false
    });
    $(document).on("click", ".sidenav a", function(a) {
        a.preventDefault();
        var b = $(this).data("pos");
        if (getUA() === "chrome" || getUA() === "firefox") {
            TweenLite.to(window, 1, {
                scrollTo: {
                    y: b,
                    x: 0
                },
                ease: Power4.easeOut
            })
        } else {
            $("body,html").animate({
                scrollTop: b
            }, 500)
        }
    });
    $(document).on("click", ".gotobottom", function(a) {
        a.preventDefault();
        var b = $("#footer").offset().top;
        HTML.removeClass("toggled");
        if (getUA() === "chrome" || getUA() === "firefox") {
            TweenLite.to(window, 3, {
                scrollTo: {
                    y: b,
                    x: 0
                },
                ease: Power4.easeOut
            })
        } else {
            $("body,html").animate({
                scrollTop: b
            }, 500)
        }
    });
    $(document).on("click", ".gototop", function(a) {
        a.preventDefault();
        if (getUA() === "chrome" || getUA() === "firefox") {
            TweenLite.to(window, 3, {
                scrollTo: {
                    y: 0,
                    x: 0
                },
                ease: Power4.easeOut
            })
        } else {
            $("body,html").animate({
                scrollTop: 0
            }, 500)
        }
    });
    $(document).on("click", ".toggle, #mask", function(a) {
        a.preventDefault();
        HTML.toggleClass("toggled")
    });
    $(document).on("click", ".circle_control_pause", function(a) {
        a.preventDefault();
        HTML.removeClass("audio_play").addClass("audio_pause");
        audio.pause()
    });
    $(document).on("click", ".circle_control_play", function(a) {
        a.preventDefault();
        HTML.removeClass("audio_pause").addClass("audio_play");
        audio.play()
    });
    $(document).on({
        mousedown: function() {
            $(this).addClass("grab")
        },
        mouseup: function() {
            $(this).removeClass("grab")
        }
    }, ".circle_control");

    function getUA() {
        var b = window.navigator.userAgent.toLowerCase();
        var a = window.navigator.appVersion.toLowerCase();
        if (b.indexOf("msie") > -1) {
            if (a.indexOf("msie 6.0") > -1) {
                return "ie ie6"
            } else {
                if (a.indexOf("msie 7.0") > -1) {
                    richflag = false;
                    return "ie ie7"
                } else {
                    if (a.indexOf("msie 8.0") > -1) {
                        richflag = false;
                        return "ie ie8"
                    } else {
                        if (a.indexOf("msie 9.0") > -1) {
                            richflag = true;
                            return "ie ie9"
                        } else {
                            if (a.indexOf("msie 10.0") > -1) {
                                richflag = true;
                                return "ie ie10"
                            } else {
                                richflag = true;
                                return "ie"
                            }
                        }
                    }
                }
            }
        } else {
            if (a.indexOf("trident/7.0") > -1) {
                richflag = true;
                return "ie ie11"
            } else {
                if (b.indexOf("firefox") > -1) {
                    richflag = true;
                    return "firefox"
                } else {
                    if (b.indexOf("opera") > -1) {
                        richflag = true;
                        return "opera"
                    } else {
                        if (b.indexOf("chrome") > -1) {
                            richflag = true;
                            return "chrome"
                        } else {
                            if (b.indexOf("safari") > -1) {
                                richflag = true;
                                return "safari"
                            } else {}
                        }
                    }
                }
            }
        }
    }
    $(document).on("pjax:success", function() {
        ga("set", "location", window.location.href);
        ga("send", "pageview")
    });
    $(document).on("pjax:start", function() {
        HTML.removeClass("toggled")
    });
    $(document).on("pjax:end", function() {
        getUA();
        $("#loadbody").animate({
            opacity: 1
        }, 300);
        setSize();
        commonafter();
        setTimeout(function() {
            $("html").addClass("loaded")
        }, 300);
        if (!$(".subpages").length) {
            setdraw_t();
            if (getUA() === "firefox") {} else {
                int_draw_t = setInterval(function() {
                    draw_t()
                }, intval)
            }
            if (getUA() === "chrome" || getUA() === "firefox") {} else {
                draw_roundy()
            }
            setTimeout(function() {
                setupParticles()
            }, 1000);
            $("html").removeClass("nowonsubpages")
        } else {
            setTimeout(function() {
                $("html").addClass("nowonsubpages")
            }, 300)
        }
        $(".borders").find("path").each(function(b) {
            var e = this;
            var a = e.getTotalLength();
            var d = e.getPointAtLength(0);
            $(this).attr({
                "stroke-dasharray": a,
                "stroke-dashoffset": a
            })
        });
        $(".cover").each(function(a, b) {
            var d = $(this);
            var e = d.data("src");
            d.css({
                "background-size": "cover",
                "background-image": "url(" + e + ")"
            })
        });
        lateload();
        $(".pagging").find("a").each(function(b, d) {
            var a = $(this).attr("href");
            var e = a.replace(/\?_pjax=%23loadbody/g, "");
            $(this).attr("href", e)
        })
    });
    $(document).on("click", "a[data-pjax],.pjx,.pjx_wrap a", function(b) {
        b.preventDefault();
        $("html").removeClass("loaded");
        if (b.metaKey || b.ctrlKey) {
            window.open(this.href);
            return false
        }
        var a = $(this).attr("href");
        $("#loadbody").animate({
            opacity: 0
        }, 300, function() {
            $.pjax({
                url: a,
                container: "#loadbody",
                fragment: "#loadbody",
                timeout: 3000
            })
        })
    });
})(jQuery);