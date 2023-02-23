input {
  syslog {
    port => 514
    type => "cloudflare_worker_logs"
  }
}

filter {
  grok {
    match => { "message" => "%{URIPATHPARAM:ipfs_hash}" }
  }
}

output {
  elasticsearch {
    hosts => ["http://elasticsearch:9200"]
    index => "cloudflare_worker_logs-%{+YYYY.MM.dd}"
  }
}
